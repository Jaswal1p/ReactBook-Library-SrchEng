import gql from 'graphql-tag';

export const ADD_USER =gql`
    mutation addUser() {

    }


`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {

    }


`;

export const SAVE_BOOK = gql`
    mutation saveBook() {
        
    }


`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {

    }


`;