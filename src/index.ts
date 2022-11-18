import * as dotenv from "dotenv";

dotenv.config();

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import typeDefs from "./schema";
import resolvers from "./resolver";
import { users } from "./datasource";
import datasource from "./lib/datasource";

const start = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const port = process.env.PORT || 8000;
  //const schema = await buildSchema({ resolvers: [] });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `Serveur lancé sur http://localhost:${port}${server.graphqlPath}`
  );
  await datasource.initialize();

  // await new Promise(() =>
  //   httpServer.listen({ port }, async () => {
  //     await datasource.initialize();
  //     console.log(
  //       `Serveur lancé sur http://localhost:${port}${server.graphqlPath}`
  //     );
  //   })
  // );

  // .then(() => {
  //   console.log(`Serveur lancé sur ${port}`);
  // });
};

start();
