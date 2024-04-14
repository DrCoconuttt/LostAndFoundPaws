/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePostReport = /* GraphQL */ `
  subscription OnCreatePostReport(
    $filter: ModelSubscriptionPostReportFilterInput
    $owner: String
  ) {
    onCreatePostReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      post {
        id
        name
        status
        gender
        summary
        description
        resolved
        lastKnownLocation {
          latitude
          longitude
          address
          __typename
        }
        species
        images
        contactInfo {
          email
          phone
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      postID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePostReport = /* GraphQL */ `
  subscription OnUpdatePostReport(
    $filter: ModelSubscriptionPostReportFilterInput
    $owner: String
  ) {
    onUpdatePostReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      post {
        id
        name
        status
        gender
        summary
        description
        resolved
        lastKnownLocation {
          latitude
          longitude
          address
          __typename
        }
        species
        images
        contactInfo {
          email
          phone
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      postID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePostReport = /* GraphQL */ `
  subscription OnDeletePostReport(
    $filter: ModelSubscriptionPostReportFilterInput
    $owner: String
  ) {
    onDeletePostReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      post {
        id
        name
        status
        gender
        summary
        description
        resolved
        lastKnownLocation {
          latitude
          longitude
          address
          __typename
        }
        species
        images
        contactInfo {
          email
          phone
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      postID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateCommentReport = /* GraphQL */ `
  subscription OnCreateCommentReport(
    $filter: ModelSubscriptionCommentReportFilterInput
    $owner: String
  ) {
    onCreateCommentReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      comment {
        id
        content
        postID
        parentCommentID
        parentComment {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        replies {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      commentID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateCommentReport = /* GraphQL */ `
  subscription OnUpdateCommentReport(
    $filter: ModelSubscriptionCommentReportFilterInput
    $owner: String
  ) {
    onUpdateCommentReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      comment {
        id
        content
        postID
        parentCommentID
        parentComment {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        replies {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      commentID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteCommentReport = /* GraphQL */ `
  subscription OnDeleteCommentReport(
    $filter: ModelSubscriptionCommentReportFilterInput
    $owner: String
  ) {
    onDeleteCommentReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      comment {
        id
        content
        postID
        parentCommentID
        parentComment {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        replies {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      commentID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateSightingReport = /* GraphQL */ `
  subscription OnCreateSightingReport(
    $filter: ModelSubscriptionSightingReportFilterInput
    $owner: String
  ) {
    onCreateSightingReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      sighting {
        id
        image
        location {
          latitude
          longitude
          address
          __typename
        }
        resolved
        reporterType
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        contactInfo {
          email
          phone
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      sightingID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateSightingReport = /* GraphQL */ `
  subscription OnUpdateSightingReport(
    $filter: ModelSubscriptionSightingReportFilterInput
    $owner: String
  ) {
    onUpdateSightingReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      sighting {
        id
        image
        location {
          latitude
          longitude
          address
          __typename
        }
        resolved
        reporterType
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        contactInfo {
          email
          phone
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      sightingID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteSightingReport = /* GraphQL */ `
  subscription OnDeleteSightingReport(
    $filter: ModelSubscriptionSightingReportFilterInput
    $owner: String
  ) {
    onDeleteSightingReport(filter: $filter, owner: $owner) {
      id
      reason
      description
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      sighting {
        id
        image
        location {
          latitude
          longitude
          address
          __typename
        }
        resolved
        reporterType
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        contactInfo {
          email
          phone
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      sightingID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      username
      role
      profilePicture
      email
      phone
      createdAt
      updatedAt
      posts {
        items {
          id
          name
          status
          gender
          summary
          description
          resolved
          lastKnownLocation {
            latitude
            longitude
            address
            __typename
          }
          species
          images
          contactInfo {
            email
            phone
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      postReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          post {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          postID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      sightings {
        items {
          id
          image
          location {
            latitude
            longitude
            address
            __typename
          }
          resolved
          reporterType
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          contactInfo {
            email
            phone
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      sightingReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          sighting {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          sightingID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      commentReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          commentID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      username
      role
      profilePicture
      email
      phone
      createdAt
      updatedAt
      posts {
        items {
          id
          name
          status
          gender
          summary
          description
          resolved
          lastKnownLocation {
            latitude
            longitude
            address
            __typename
          }
          species
          images
          contactInfo {
            email
            phone
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      postReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          post {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          postID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      sightings {
        items {
          id
          image
          location {
            latitude
            longitude
            address
            __typename
          }
          resolved
          reporterType
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          contactInfo {
            email
            phone
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      sightingReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          sighting {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          sightingID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      commentReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          commentID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      username
      role
      profilePicture
      email
      phone
      createdAt
      updatedAt
      posts {
        items {
          id
          name
          status
          gender
          summary
          description
          resolved
          lastKnownLocation {
            latitude
            longitude
            address
            __typename
          }
          species
          images
          contactInfo {
            email
            phone
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      postReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          post {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          postID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      sightings {
        items {
          id
          image
          location {
            latitude
            longitude
            address
            __typename
          }
          resolved
          reporterType
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          contactInfo {
            email
            phone
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      sightingReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          sighting {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          sightingID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      commentReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          commentID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
      id
      name
      status
      gender
      summary
      description
      resolved
      lastKnownLocation {
        latitude
        longitude
        address
        __typename
      }
      species
      images
      contactInfo {
        email
        phone
        __typename
      }
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      comments {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      postReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          post {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          postID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
      id
      name
      status
      gender
      summary
      description
      resolved
      lastKnownLocation {
        latitude
        longitude
        address
        __typename
      }
      species
      images
      contactInfo {
        email
        phone
        __typename
      }
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      comments {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      postReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          post {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          postID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
      id
      name
      status
      gender
      summary
      description
      resolved
      lastKnownLocation {
        latitude
        longitude
        address
        __typename
      }
      species
      images
      contactInfo {
        email
        phone
        __typename
      }
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      comments {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      postReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          post {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          postID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
      id
      content
      postID
      parentCommentID
      parentComment {
        id
        content
        postID
        parentCommentID
        parentComment {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        replies {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      replies {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      commentReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          commentID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
      id
      content
      postID
      parentCommentID
      parentComment {
        id
        content
        postID
        parentCommentID
        parentComment {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        replies {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      replies {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      commentReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          commentID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
      id
      content
      postID
      parentCommentID
      parentComment {
        id
        content
        postID
        parentCommentID
        parentComment {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        replies {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          role
          profilePicture
          email
          phone
          createdAt
          updatedAt
          posts {
            items {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          postReports {
            items {
              id
              reason
              description
              userID
              postID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightings {
            items {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          sightingReports {
            items {
              id
              reason
              description
              userID
              sightingID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          comments {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          owner
          __typename
        }
        userID
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      replies {
        items {
          id
          content
          postID
          parentCommentID
          parentComment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          replies {
            items {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          commentReports {
            items {
              id
              reason
              description
              userID
              commentID
              createdAt
              updatedAt
              owner
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      commentReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          comment {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          commentID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateSighting = /* GraphQL */ `
  subscription OnCreateSighting(
    $filter: ModelSubscriptionSightingFilterInput
    $owner: String
  ) {
    onCreateSighting(filter: $filter, owner: $owner) {
      id
      image
      location {
        latitude
        longitude
        address
        __typename
      }
      resolved
      reporterType
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      contactInfo {
        email
        phone
        __typename
      }
      sightingReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          sighting {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          sightingID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateSighting = /* GraphQL */ `
  subscription OnUpdateSighting(
    $filter: ModelSubscriptionSightingFilterInput
    $owner: String
  ) {
    onUpdateSighting(filter: $filter, owner: $owner) {
      id
      image
      location {
        latitude
        longitude
        address
        __typename
      }
      resolved
      reporterType
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      contactInfo {
        email
        phone
        __typename
      }
      sightingReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          sighting {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          sightingID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteSighting = /* GraphQL */ `
  subscription OnDeleteSighting(
    $filter: ModelSubscriptionSightingFilterInput
    $owner: String
  ) {
    onDeleteSighting(filter: $filter, owner: $owner) {
      id
      image
      location {
        latitude
        longitude
        address
        __typename
      }
      resolved
      reporterType
      user {
        id
        username
        role
        profilePicture
        email
        phone
        createdAt
        updatedAt
        posts {
          items {
            id
            name
            status
            gender
            summary
            description
            resolved
            lastKnownLocation {
              latitude
              longitude
              address
              __typename
            }
            species
            images
            contactInfo {
              email
              phone
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comments {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        postReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            post {
              id
              name
              status
              gender
              summary
              description
              resolved
              species
              images
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            postID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightings {
          items {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        sightingReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            sighting {
              id
              image
              resolved
              reporterType
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            sightingID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
            id
            content
            postID
            parentCommentID
            parentComment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            replies {
              nextToken
              __typename
            }
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            commentReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        commentReports {
          items {
            id
            reason
            description
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            comment {
              id
              content
              postID
              parentCommentID
              userID
              createdAt
              updatedAt
              owner
              __typename
            }
            commentID
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        owner
        __typename
      }
      userID
      contactInfo {
        email
        phone
        __typename
      }
      sightingReports {
        items {
          id
          reason
          description
          user {
            id
            username
            role
            profilePicture
            email
            phone
            createdAt
            updatedAt
            posts {
              nextToken
              __typename
            }
            postReports {
              nextToken
              __typename
            }
            sightings {
              nextToken
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            comments {
              nextToken
              __typename
            }
            commentReports {
              nextToken
              __typename
            }
            owner
            __typename
          }
          userID
          sighting {
            id
            image
            location {
              latitude
              longitude
              address
              __typename
            }
            resolved
            reporterType
            user {
              id
              username
              role
              profilePicture
              email
              phone
              createdAt
              updatedAt
              owner
              __typename
            }
            userID
            contactInfo {
              email
              phone
              __typename
            }
            sightingReports {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            owner
            __typename
          }
          sightingID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
