import { ApolloServer, gql } from "apollo-server";
import { faker } from "@faker-js/faker";

const typeDefs = gql`
  type Query {
    listUsers: [User]
  }
  type User {
    firstname: String
    lastname: String
  }
`;

const resolvers = {
  Query: {
    listUsers: () => {},
  },
};

const mocks = {
  User: () => ({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
  }),
};

const GET_USERS = gql`
  query ListUsers {
    listUsers {
      firstname
      lastname
    }
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
});

beforeAll(async () => {
  await server.listen({ port: 4000 });
  console.log(`🚀 Server ready`);
});

test("Test", async () => {
  const result = await server.executeOperation({
    query: GET_USERS,
    // variables: { id: 1 }
  });
  expect(result.data?.listUsers).not.toHaveLength(0);
});
