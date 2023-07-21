import * as dotenv from "dotenv";

dotenv.config();

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import express from "express";
import http from "http";

import typeDefs from "./schema";
import resolvers from "./resolver";
import datasource from "./lib/datasource";
import { getUserFromToken } from "./lib/utilities";

import cors from "cors";

// import cookieParser from "cookie-parser";

// permet à la partie front de pouvoir communiquer avec le front sur le port 3000

const corsConfig = {
  origin:
    process.env.NODE_ENV == 'test'
      ? '*'
      : ['http://localhost:3000'],
  //origin: ["http://localhost:3000", "*"],
  credentials: true,
};

const start = async () => {
  const app = express();
  app.use(cors(corsConfig));
  // app.use(cookieParser())

  // Création du serveur http sur le port 8000
  const httpServer = http.createServer(app);
  const port = process.env.PORT || 8000;

  // Instanciation et définition du serveur Apollo
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    introspection: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    context: async ({ req, res }) => {
      const { authorization } = req.headers;
      //console.log(req.headers.authorization);
      let userLogged = await getUserFromToken(authorization);
      //console.log("TEST", userLogged);
      return {
        userLogged,
      };
    },
  });

  // Lancement du serveur
  await server.start();
  server.applyMiddleware({ app, cors: false });
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `Serveur lancé sur http://localhost:${port}${server.graphqlPath}`
  );

  // Initialisation de la db
  await datasource.initialize();
};

start();
