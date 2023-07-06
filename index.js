const {ApolloServer, gpl} = require('apollo-server')

const server = new ApolloServer();

server.listen().then( (url) => {
    console.log(`Server running in URL ${url}`)
} )