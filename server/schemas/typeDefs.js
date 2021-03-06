// import the gql tagged template function as suggested in the assignment description

const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}


type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}


input bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}


type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
}


type Auth {
    token: ID
    user: User
}


type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
}



`;

// export the typeDefs
module.exports = typeDefs;




//added lines 39 to 42