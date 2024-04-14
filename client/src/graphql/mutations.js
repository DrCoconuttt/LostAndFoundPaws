/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const updateSighting = /* GraphQL */ `
  mutation UpdateSighting(
    $input: UpdateSightingInput!
    $condition: ModelSightingConditionInput
  ) {
    updateSighting(input: $input, condition: $condition) {
      id
      image
      location {
        latitude
        longitude
        address
        __typename
      }
      reporterType
      resolved
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
export const deleteSighting = /* GraphQL */ `
  mutation DeleteSighting(
    $input: DeleteSightingInput!
    $condition: ModelSightingConditionInput
  ) {
    deleteSighting(input: $input, condition: $condition) {
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
export const createPostReport = /* GraphQL */ `
  mutation CreatePostReport(
    $input: CreatePostReportInput!
    $condition: ModelPostReportConditionInput
  ) {
    createPostReport(input: $input, condition: $condition) {
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
  }
`;
export const updatePostReport = /* GraphQL */ `
  mutation UpdatePostReport(
    $input: UpdatePostReportInput!
    $condition: ModelPostReportConditionInput
  ) {
    updatePostReport(input: $input, condition: $condition) {
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
  }
`;
export const deletePostReport = /* GraphQL */ `
  mutation DeletePostReport(
    $input: DeletePostReportInput!
    $condition: ModelPostReportConditionInput
  ) {
    deletePostReport(input: $input, condition: $condition) {
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
  }
`;
export const createCommentReport = /* GraphQL */ `
  mutation CreateCommentReport(
    $input: CreateCommentReportInput!
    $condition: ModelCommentReportConditionInput
  ) {
    createCommentReport(input: $input, condition: $condition) {
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
export const updateCommentReport = /* GraphQL */ `
  mutation UpdateCommentReport(
    $input: UpdateCommentReportInput!
    $condition: ModelCommentReportConditionInput
  ) {
    updateCommentReport(input: $input, condition: $condition) {
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
export const deleteCommentReport = /* GraphQL */ `
  mutation DeleteCommentReport(
    $input: DeleteCommentReportInput!
    $condition: ModelCommentReportConditionInput
  ) {
    deleteCommentReport(input: $input, condition: $condition) {
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
export const createSightingReport = /* GraphQL */ `
  mutation CreateSightingReport(
    $input: CreateSightingReportInput!
    $condition: ModelSightingReportConditionInput
  ) {
    createSightingReport(input: $input, condition: $condition) {
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
export const updateSightingReport = /* GraphQL */ `
  mutation UpdateSightingReport(
    $input: UpdateSightingReportInput!
    $condition: ModelSightingReportConditionInput
  ) {
    updateSightingReport(input: $input, condition: $condition) {
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
  }
`;
export const deleteSightingReport = /* GraphQL */ `
  mutation DeleteSightingReport(
    $input: DeleteSightingReportInput!
    $condition: ModelSightingReportConditionInput
  ) {
    deleteSightingReport(input: $input, condition: $condition) {
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
        reporterType
        userID
        resolved
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const createSighting = /* GraphQL */ `
  mutation CreateSighting(
    $input: CreateSightingInput!
    $condition: ModelSightingConditionInput
  ) {
    createSighting(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
