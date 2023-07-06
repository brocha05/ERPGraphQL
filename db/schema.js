const {gql} = require('apollo-server')

// Schema
const typeDefs = gql`
    type Curso {
        titulo: String
        tecnologia: String
    }

    type Tecnologia {
        tecnologia: String
    }

    type Query {
        obtenerCursos: [Curso]
        obtenerTecnologias: [Tecnologia]
    }
`;

module.exports = typeDefs;