import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client/core';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql',
    fetch,
  }),
  cache: new InMemoryCache({}),
});

/* ------------------------------ */

const CREATE_ROLE = gql`
  mutation Mutation($role: AddRole) {
    addRole(role: $role) {
      role
    }
  }
`;

const CREATE_USER = gql`
  mutation addUser($user: CreateUser!) {
    addUser(user: $user) {
      user {
        firstname
        email
      }
    }
  }
`;

const LOGIN = gql`
  query Login($user: LoginUser!) {
    login(user: $user) {
      token
    }
  }
`;

describe('user resolver', () => {
  let email = `test${new Date().getTime()}@gmail.com`;
  let password = 'Password';
  let lastname = 'tata31';
  let role = 'USER';

  it("creation d'un role", async () => {
    try {
      await client.mutate({
        mutation: CREATE_ROLE,
        variables: {
          role: {
            role,
          },
        },
      });
    } catch (error) {
      console.log('erreur catch', error);
    }
  });

  it('créer utilisateur', async () => {
    try {
      const res = await client.mutate({
        mutation: CREATE_USER,
        variables: {
          user: {
            email,
            firstname: 'toto25',
            lastname,
            password,
            role,
            confirmPassword: password,
          },
        },
      });

      expect(res.data?.addUser).toEqual({
        user: {
          firstname: 'toto25',
          email,
          __typename: 'UserMinimal',
        },
        __typename: 'UserInfos',
      });
    } catch (err) {
      console.log('erreur catch', err);
    }
  });

  it('login et récuperation de token', async () => {
    try {
      const res = await client.query({
        query: LOGIN,
        variables: {
          user: {
            email,
            password,
          },
        },
        fetchPolicy: 'no-cache',
      });
  
      expect(res.data?.login).toBeTruthy();
  
      expect(res.data?.login.token).toMatch(/^(?:[\w-]*\.){2}[\w-]*$/);
  
      let token = res.data?.login.token;
      console.log(token);
      
    } catch (error) {
      console.log("erreur catch LOGIN", error)
    }
  });
});
