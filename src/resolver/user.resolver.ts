import User from '../entity/User';
import { GraphQLObjectType } from 'graphql';
import UserService from '../services/user.service';
import datasource from '../lib/datasource';
//import { } from './user.resolver.spec';
//const users: array<IUser> = [];

export default {
  Query: {
    users: async () => await new UserService().findAll(),
    user: async (_: GraphQLObjectType, args: any) => {
      const { id } = args;
      return await new UserService().findUser(id);
    },
  },
  Mutation: {
    addUser: async (_: GraphQLObjectType, args: any) => {
      const { firstname, lastname, email, password } = args;
      console.log(args);
      // try {
      //   let user = await new UserService().createUser({
      //     firstname,
      //     lastname,
      //     email,
      //     password,
      //   });
      //   console.log(user);
      //   // return user;
      // } catch (error) {
      //   console.log(error);
      //   // return false;
      // }

      return {firstname: "toto", lastname: "tata", email: "sdqsd@gmail.com", password: "coucou"}
    },
  },
};

// Mutation: {
//    login: async (_, { email }, { dataSources }) => {
//      const user = await dataSources.userAPI.findOrCreateUser({ email });
//      if (user) {
//        user.token = Buffer.from(email).toString('base64');
//        return user;
//      }
//    },
//  },
