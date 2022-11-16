import * as dotenv from 'dotenv';

dotenv.config();

import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { buildSchema } from 'graphql';
import { getParsedCommandLineOfConfigFile } from 'typescript';

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    firstname: String!
    lastname: String
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    registerUser(email: String!, firstname: String!, lastname: String): User!
  }
`;

const users = [
  {
    id: 1,
    email: 'jesuisunemail@gmail.com',
    firstname: 'toto',
    lastname: 'tata',
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

const start = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const port = process.env.PORT || 8000;
  //const schema = await buildSchema({ resolvers: [] });
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });
  await server.start();
  await new Promise((resolve) => httpServer.listen({port}, () => resolve(null)));
  console.log(`Serveur lancé sur http://localhost:${port}${server.graphqlPath}`);
  // .then(() => {
  //   console.log(`Serveur lancé sur ${port}`);
  // });
};

start();
