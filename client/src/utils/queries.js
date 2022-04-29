import gql from 'graphql-tag';
// import gql from '@apollo/client';

export const GET_USER = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;