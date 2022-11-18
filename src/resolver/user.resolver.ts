import User from '../entity/User';
import { GraphQLObjectType } from 'graphql';
import UserService from '../services/user.service';
import datasource from '../lib/datasource';
import {checkRights} from '../lib/utilities';
import { ICreateUser } from './user.resolver.spec';
import { ExpressContext } from "apollo-server-express";
//import { } from './user.resolver.spec';
//const users: array<IUser> = [];

export default {
  Query: {
    users: async (_: GraphQLObjectType, args: any, {userLogged}: any) => {
      checkRights(userLogged);
      // checkAuthorization(context.userLogged, ["ADMIN"]);
      // if (!userLogged){
      //   throw new Error("Vous devez être connecté");
      // }
      // if (userLogged.id != 21){
      //   throw new Error("Il n'a pas le droit de faire  ça");
      // }
      return await new UserService().findAll()
    
    },
    user: async (_: GraphQLObjectType, args: any) => {
      const { id } = args;
      return await new UserService().findUser(id);
    },
    login: async(_:GraphQLObjectType, args: any) => {
      //check email et password et retourner le token 
    }
  },
  Mutation: {
    addUser: async (_: GraphQLObjectType, args: ICreateUser) => {
      const { firstname, lastname, email, password } = args;
      let data; //créer interface
      try {
        data = await new UserService().createUser({
          firstname,
          lastname,
          email,
          password,
        });
        return data;
         
      } catch (error) {
        console.log(error);
        throw new Error("erreur")
        // return false;
      }
    },

  },
};