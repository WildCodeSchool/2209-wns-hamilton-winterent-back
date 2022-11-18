import User from '../entity/User';
import { GraphQLObjectType } from 'graphql';
import UserService from '../services/user.service';
import datasource from '../lib/datasource';
import bcrypt from 'bcrypt';
import { checkRights, generateToken } from '../lib/utilities';
import { ICreateUser, ILoginUserInput } from './user.resolver.spec';
import { ApolloError, ExpressContext } from 'apollo-server-express';
//import { } from './user.resolver.spec';
//const users: array<IUser> = [];

export default {
  Query: {
    users: async (_: GraphQLObjectType, args: any, { userLogged }: any) => {
      checkRights(userLogged);
      // checkAuthorization(context.userLogged, ["ADMIN"]);
      // if (!userLogged){
      //   throw new Error("Vous devez être connecté");
      // }
      // if (userLogged.id != 21){
      //   throw new Error("Il n'a pas le droit de faire  ça");
      // }
      return await new UserService().findAll();
    },
    user: async (_: GraphQLObjectType, args: any) => {
      const { id } = args;
      return await new UserService().findUser(id);
    },
    login: async (
      _: GraphQLObjectType,
      args: ILoginUserInput,
      res: ExpressContext
    ) => {
      //check email et password et retourner le token

      const { email, password } = args;
      let user = await new UserService().findUserByEmail(email);
      console.log(user);

      if (!user) {
        throw new ApolloError("Cet utilisateur n'existe pas");
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new ApolloError('Vérifiez vos informations');
      }
      console.log(match);

      //const {email: string} = user
      let token = generateToken({ email });
      //console.log(user)
      return { user, token /*, success: math */ };
    },
    logout: async (_: GraphQLObjectType, {}, { res }: ExpressContext) => {
      res.clearCookie('token');
      return { success: true };
    },
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
        throw new Error('erreur');
        // return false;
      }
    },
  },
};
