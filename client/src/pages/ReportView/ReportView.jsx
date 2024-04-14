import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import ReportedPetCard from "../../components/ReportedPetCard/ReportedPetCard";
import ReportedSightingCard from "../../components/ReportedSightingCard/ReportedSightingCard";
import ReportedCommentCard from "../../components/ReportedCommentCard/ReportedCommentCard";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import { downloadData } from "@aws-amplify/storage";

const ReportView = ({ selectedType, reportReason, sortBy, applyClicked }) => {
  const client = useMemo(() => generateClient({ authMode: "userPool" }), []);
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastSeverity, setToastSeverity] = useState("success");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        let fetchedReports = [];

        // Conditionally fetch reports based on selectedType
        if (selectedType.toLowerCase() === "comments") {
          const data = await client.graphql({
            query: queries.listCommentReports,
          });
          fetchedReports = data.data.listCommentReports.items.map((report) => ({
            ...report,
            entityType: "comment",
          }));
        } else if (
          selectedType.toLowerCase() === "lost" ||
          selectedType.toLowerCase() === "found"
        ) {
          const data = await client.graphql({ query: queries.listPostReports });
          fetchedReports = data.data.listPostReports.items.map((report) => ({
            ...report,
            entityType: "post",
          }));
        } else if (selectedType.toLowerCase() === "sighting") {
          const data = await client.graphql({
            query: queries.listSightingReports,
          });
          fetchedReports = data.data.listSightingReports.items.map(
            (report) => ({
              ...report,
              entityType: "sighting",
            })
          );
        }

        // Fetch additional details for posts, sightings, or comments as needed
        const detailedReports = await Promise.all(
          fetchedReports.map(async (report) => {
            if (report.entityType === "post" && report.postID && report.post) {
              const post = report.post;
              const firstImageUrl = post.images[0];
              const firstImageData = await downloadData({ key: firstImageUrl })
                .result;
              const firstImageSrc = URL.createObjectURL(firstImageData.body);
              return { ...report, post: { ...post, firstImg: firstImageSrc } };
            }
            if (report.entityType === "sighting" && report.sightingID && report.sighting) {
              const sighting = report.sighting;
              const imageUrl = sighting.image;
              const imageData = await downloadData({ key: imageUrl }).result;
              const imageSrc = URL.createObjectURL(imageData.body);
              return {
                ...report,
                sighting: { ...sighting, img: imageSrc },
              };
            }
            if (report.entityType === "comment" && report.commentID) {
              const comment = report.comment;
              if (comment == null) return { ...report, comment: null };
              const detailedComment = {
                ...comment,
                username: comment.user?.username,
                avatar: comment.user?.profilePicture,
                userId: comment.user?.id,
                replyTo: comment.replyTo,
              };
              return { ...report, comment: detailedComment };
            }
            return report;
          })
        );

        // Filter reports based on selectedType for posts (ignore for comments and sightings since already filtered)
        let filteredReports =
          selectedType.toLowerCase() === "comments" ||
          selectedType.toLowerCase() === "sighting"
            ? detailedReports
            : detailedReports.filter(
                (report) =>
                  report.post &&
                  report.post.status.toLowerCase() ===
                    selectedType.toLowerCase()
              );

        // Filter out the reports that don't match the reportReason
        if (
          reportReason.inappropriate ||
          reportReason.spam ||
          reportReason.other
        ) {
          filteredReports = filteredReports.filter(
            (report) =>
              (reportReason.inappropriate &&
                report.reason.toLowerCase() === "inappropriate") ||
              (reportReason.spam && report.reason.toLowerCase() === "spam") ||
              (reportReason.other && report.reason.toLowerCase() === "other")
          );
        }

        // Sort based on sort by
        switch (sortBy) {
          case "Newest Updated":
            filteredReports.sort(
              (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
            );
            break;
          case "Oldest Updated":
            filteredReports.sort(
              (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
            );
            break;
          case "Newest Posted":
            filteredReports.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            break;
          case "Oldest Posted":
            filteredReports.sort(
              (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            );
            break;
          case "Name":
            filteredReports.sort((a, b) => {
              if (a.post && b.post && a.post.name && b.post.name) {
                return a.post.name.localeCompare(b.post.name);
              }
              return 0;
            });
            break;
        }

        setReports(filteredReports);
      } catch (error) {
        console.error("Error fetching reports: ", error);
        setToastSeverity("error");
        setToastMessage("Error fetching reports.");
        setToastOpen(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [selectedType, client, applyClicked]);

  const handleDelete = async (reportId, entityId, entityType) => {
    setLoading(true);
    try {
      // Delete the entity (post, sighting, or comment) associated with the report
      if (entityType === "post") {
        await client.graphql({
          query: mutations.deletePost,
          variables: { input: { id: entityId } },
        });
      } else if (entityType === "sighting") {
        await client.graphql({
          query: mutations.deleteSighting,
          variables: { input: { id: entityId } },
        });
      } else if (entityType === "comment") {
        await client.graphql({
          query: mutations.deleteComment,
          variables: { input: { id: entityId } },
        });
      }

      // Delete the report itself
      const deleteReportMutation =
        entityType === "post"
          ? mutations.deletePostReport
          : entityType === "sighting"
          ? mutations.deleteSightingReport
          : mutations.deleteCommentReport;

      await client.graphql({
        query: deleteReportMutation,
        variables: { input: { id: reportId } },
      });

      // Update the UI by removing the deleted report
      const updatedReports = reports.filter((report) => report.id !== reportId);
      setReports(updatedReports);
      handleToastOpen(
        "success",
        `Report and associated ${entityType} deleted successfully`
      );
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen(
        "error",
        `Error deleting report and associated ${entityType}`
      );
      console.error(
        `Error deleting report and associated ${entityType}: `,
        error
      );
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const resolveSighting = async (id) => {
    setLoading(true);
    const updateSightingInput = {
      id: id
    };

    try {
      await client.graphql({
        query: mutations.deleteSighting,
        variables: { input: updateSightingInput },
      });
      handleToastOpen("success", "Successfully marked sighting as resolved.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error resolving sighting post.");
      console.error("Error resolving sighting post: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };


  const resolvePost = async (id) => {
    setLoading(true);
    const updatePostInput = {
      id: id
    };

    try {
      await client.graphql({
        query: mutations.deletePost,
        variables: { input: updatePostInput },
      });
      handleToastOpen("success", "Successfully marked post as resolved.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error resolving post.");
      console.error("Error resolving post: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const handleIgnore = async (reportId, entityType) => {
    setLoading(true);
    try {
      // Delete the report only
      const deleteReportMutation =
        entityType === "post"
          ? mutations.deletePostReport
          : entityType === "sighting"
          ? mutations.deleteSightingReport
          : mutations.deleteCommentReport;

      await client.graphql({
        query: deleteReportMutation,
        variables: { input: { id: reportId } },
      });

      // Update the UI by removing the ignored report
      const updatedReports = reports.filter((report) => report.id !== reportId);
      setReports(updatedReports);
      handleToastOpen("success", "Report ignored successfully");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error ignoring report");
      console.error("Error ignoring report: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const handleToastOpen = (severity, message) => {
    setToastSeverity(severity);
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleToastClose = (event, reason) => {
    setToastOpen(false);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {reports.length > 0 ? (
        <>
          {/* Cards for Posts */}
          {reports
            .filter((report) => report.postID)
            .map((report) => (
              <ReportedPetCard
                key={report.id}
                report={report}
                petData={report.post}
                onDelete={() => handleDelete(report.id, report.postID, "post")}
                onIgnore={() => handleIgnore(report.id, "post")}
                onResolve={resolvePost}
              />
            ))}

          {/* Cards for Comments */}
          {reports
            .filter((report) => report.commentID)
            .map((report) => (
              <ReportedCommentCard
                key={report.id}
                report={report}
                commentData={report.comment}
                onDelete={() =>
                  handleDelete(report.id, report.commentID, "comment")
                }
                onIgnore={() => handleIgnore(report.id, "comment")}
              />
            ))}

          {/* Grid for Sightings */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "flex-start",
            }}
          >
            {reports
              .filter((report) => report.sightingID)
              .map((report) => (
                <ReportedSightingCard
                  key={report.id}
                  report={report}
                  sightingData={report.sighting}
                  onDelete={() =>
                    handleDelete(report.id, report.sightingID, "sighting")
                  }
                  onIgnore={() => handleIgnore(report.id, "sighting")}
                  onResolve={resolveSighting}
                />
              ))}
          </Box>
        </>
      ) : (
        <Typography variant="h1" margin={"1rem"} display={"flex"}>
          No reports found for this category.
        </Typography>
      )}
      <ToastNotification
        open={toastOpen}
        severity={toastSeverity}
        message={toastMessage}
        handleClose={() => setToastOpen(false)}
      />
    </Box>
  );
};

export default ReportView;
