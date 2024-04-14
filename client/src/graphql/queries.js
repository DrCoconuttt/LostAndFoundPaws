/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPostReport = /* GraphQL */ `
  query GetPostReport($id: ID!) {
    getPostReport(id: $id) {
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
        lastKnownLocation {
          latitude
          longitude
          address
          __typename
        }
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
  }
`;
export const listPostReports = /* GraphQL */ `
  query ListPostReports(
    $id: ID
    $filter: ModelPostReportFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPostReports(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        reason
        description
        userID
        postID
        createdAt
        updatedAt
        owner
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
          lastKnownLocation {
            latitude
            longitude
            address
            __typename
          }
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommentReport = /* GraphQL */ `
  query GetCommentReport($id: ID!) {
    getCommentReport(id: $id) {
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
  }
`;
export const listCommentReports = /* GraphQL */ `
  query ListCommentReports(
    $id: ID
    $filter: ModelCommentReportFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCommentReports(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        reason
        description
        userID
        commentID
        createdAt
        updatedAt
        owner
        comment {
          id
          content
          postID
          parentCommentID
          userID
          createdAt
          updatedAt
          owner
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
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSightingReport = /* GraphQL */ `
  query GetSightingReport($id: ID!) {
    getSightingReport(id: $id) {
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
        resolved
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
  }
`;
export const listSightingReports = /* GraphQL */ `
  query ListSightingReports(
    $id: ID
    $filter: ModelSightingReportFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSightingReports(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        reason
        description
        userID
        sightingID
        createdAt
        updatedAt
        owner
        sighting {
          id
          location {
            latitude
            longitude
            address
            __typename
          }
          resolved
          image
          reporterType
          userID
          createdAt
          updatedAt
          owner
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postReportsByUser = /* GraphQL */ `
  query PostReportsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postReportsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const reportsByPost = /* GraphQL */ `
  query ReportsByPost(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsByPost(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const commentReportsByUser = /* GraphQL */ `
  query CommentReportsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentReportsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const reportsByComment = /* GraphQL */ `
  query ReportsByComment(
    $commentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsByComment(
      commentID: $commentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const sightingReportsByUser = /* GraphQL */ `
  query SightingReportsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSightingReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sightingReportsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const reportsBySighting = /* GraphQL */ `
  query ReportsBySighting(
    $sightingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSightingReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsBySighting(
      sightingID: $sightingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;

export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
        lastKnownLocation {
          latitude
          longitude
          address
          __typename
        }
        userID
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
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByUser = /* GraphQL */ `
  query PostsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        lastKnownLocation {
          latitude
          longitude
          address
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
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $id: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        content
        postID
        parentCommentID
        userID
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
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByPost = /* GraphQL */ `
  query CommentsByPost(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPost(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        postID
        parentCommentID
        userID
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
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const repliesByParentComment = /* GraphQL */ `
  query RepliesByParentComment(
    $parentCommentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    repliesByParentComment(
      parentCommentID: $parentCommentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const commentsByUser = /* GraphQL */ `
  query CommentsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getSighting = /* GraphQL */ `
  query GetSighting($id: ID!) {
    getSighting(id: $id) {
      id
      image
      location {
        latitude
        longitude
        address
        __typename
      }
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
  }
`;
export const listSightings = /* GraphQL */ `
  query ListSightings(
    $id: ID
    $filter: ModelSightingFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSightings(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        image
        reporterType
        userID
        location {
          latitude
          longitude
          address
          __typename
        }
        resolved
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
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sightingsByUser = /* GraphQL */ `
  query SightingsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSightingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sightingsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        image
        reporterType
        userID
        location {
          latitude
          longitude
          address
          __typename
        }
        resolved
        contactInfo {
          email
          phone
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
  }
`;
