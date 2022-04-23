// import the gql tagged template function as suggested in the assignment description

const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
    helloWorld: String
    }
`;

// export the typeDefs
module.exports = typeDefs;