const { ApolloServer, gql } = require('apollo-server');
require('./config');

const { Book } = require('./models');

const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
    year: Int
  }

  type Query {
    getBooks: [Book]
  }

  type Mutation {
    addBook(title: String, author: String, year: Int): Book
  }
`;

const resolvers = {
  Query: {
    getBooks: async () => await Book.find({}).exec()
  },
  Mutation: {
    addBook: async (_, args) => {
          try {
            let response = await Book.create(args);
            return response;
          } catch(e) {
            return e.message;
          }
      }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`[Server] Ready at ${url}`)
});