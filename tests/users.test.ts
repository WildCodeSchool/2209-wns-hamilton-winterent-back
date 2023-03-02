import {
  ApolloClient,
  gql,
} from "@apollo/client/core";
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from "apollo-server";
import typeDefs from "../src/schema";
import resolvers from "../src/resolver";
import fetch from "cross-fetch";
import { CreateUser, MutationAddUserArgs } from "../src/generated/graphql";


//const typeDefs = [ADD_USER, LOGIN, LIST_USERS] 

const server = new ApolloServer({
  schema : addMocksToSchema({
    schema : makeExecutableSchema({ typeDefs, resolvers})
  })
});

const { url } = await startStandaloneServer(server, {listen : { port : 4000}})



const ADD_USER = gql`
  mutation Mutation($user: CreateUser!) {
  addUser(user: $user) {
    user {
      id
      firstname
      email
    }
    token
  }
}
`;

const LOGIN = gql`
  query Query($user: LoginUser!) {
  login(user: $user) {
    token
    user {
      id
      firstname
      email
    }
  }
}
`;

const LIST_USERS = gql`
  query Users {
    users {
      id
      email
      firstname
      lastname
      password
    }
  }
`;

describe("User resolver", () => {
   let email = `test${new Date().getTime()}@gmail.com`;
  let password = "test";
  let token : string;

  it("créer user", async () => {
    const res = await server.mutate({
      mutation: ADD_USER,
      variables: {
        user :{
          firstname : "firstname",
          lastname : "lastname",
          email : email,
          password : password,
        } 
      },
    });
    const {
      user: { id, ...userInfos },
      token,
    } = res.data?.addUser;
    //TODO : tester l'id / tester le token;

    console.log(userInfos)

    expect(userInfos).toEqual({
        firstname : "firstname",
        email,
      __typename: "UserMinimal",
    });
  });
  it("avoir un token si le user est correct", async () => {
    const res = await server.query({
      query: LOGIN,
      variables: {
        user : {
          email,
          password,
        }
      },
      fetchPolicy: "no-cache",
    });

    expect(res.data?.login).toBeTruthy();
    expect(res.data?.login.token).toMatch(/^(?:[\w-]*\.){2}[\w-]*$/);
    token = res.data?.login.token;
  });
  it("récupérer tous les users", async () => {
    const res = await server.query({
      query: LIST_USERS,
      fetchPolicy: "no-cache",
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    });
    expect(res.data?.users).toBeTruthy();
    expect(res.data?.users.length).toBeGreaterThan(0);
  });
});
