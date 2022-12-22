import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client/core";
import fetch from "cross-fetch";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8000/graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
});

const ADD_USER = gql`
  mutation Mutation(
    $email: String!
    $firstname: String!
    $password: String!
    $lastname: String
  ) {
    addUser(
      email: $email
      firstname: $firstname
      password: $password
      lastname: $lastname
    ) {
      token
      user {
        email
        id
      }
    }
  }
`;

const LOGIN = gql`
  query Query($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        email
        id
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
    }
  }
`;

describe("User resolver", () => {
  let email = `test${new Date().getTime()}@gmail.com`;
  let password = "test";
  let token: string;

  it.only("créer user", async () => {
    const res = await client.mutate({
      mutation: ADD_USER,
      variables: {
        addUser: {
          firstname: "firstname",
          lastname: "lastname",
          email,
          password,
        },
      },
    });

    expect(res.data?.addUser).toEqual({
      firstname: "firstname",
      lastname: "lastname",
      email,
      //_typename: "User",
    });
  });
  it("avoir un token si le user est correct", async () => {
    const res = await client.query({
      query: LOGIN,
      variables: {
        email,
        password,
      },
      fetchPolicy: "no-cache",
    });

    expect(res.data?.login.success).toBeTruthy();
    expect(res.data?.login.token).toMatch(/^(?:[\w-]*\.){2}[\w-]*$/);
    token = res.data?.login.token;
  });
  it("récupérer tous les users", async () => {
    const res = await client.query({
      query: LIST_USERS,
      fetchPolicy: "no-cache",
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    });
    expect(res.data?.addUser.success).toBeTruthy();
    expect(res.data?.addUser.users.length).toBeGreaterThan(0);
  });
});
