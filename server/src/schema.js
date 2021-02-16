const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        queryForServiceCenters: [ServiceCenter!]!
    }

    type ServiceCenter {
        id : ID!
        title: String!
        address: String!
        phone: String
        availability: Availability!
    }

    type Availability {
        id : ID!
        date: [String!]!
        time: [String!]!
    }
`;

module.exports = typeDefs;