const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema')

const mocks = require('./mockdata')

const server = new ApolloServer({ typeDefs, mocks })

server.listen().then(() => {
    console.log("Server is running on 4000")
})
