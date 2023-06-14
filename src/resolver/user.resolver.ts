import UserService from "../services/user.service";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utilities";
import { ApolloError, ExpressContext } from "apollo-server-express";
import {
  LoginUser,
  MutationAddUserAddressArgs,
  MutationAddUserArgs,
  MutationUpdateUserArgs,
  QueryLoginArgs,
  UserInfos,
} from "../generated/graphql";

export default {
  Query: {
    /**La query users permet de récupérer tous les users**/
    users: async (_: any, args: any, { userLogged }: any) => {
      //checkRights(userLogged);
      // checkAuthorization(context.userLogged, ["ADMIN"]);
      // if (!userLogged){
      //   throw new Error("Vous devez être connecté");
      // }
      // if (userLogged.id != 21){
      //   throw new Error("Il n'a pas le droit de faire  ça");
      // }
      return await new UserService().findAll();
    },
    user: async (_: any, args: any) => {
      const { id } = args;
      return await new UserService().findUser(id);
    },
    login: async (_: any, args: QueryLoginArgs, res: ExpressContext) => {
      //check email et password et retourner le token

      const {
        user: { email, password },
      } = args;

      let user = await new UserService().findUserByEmail(email);
      if (!user) {
        throw new ApolloError("Cet utilisateur n'existe pas");
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new ApolloError('Vérifiez vos informations');
      }
      console.log(match);

      let token = generateToken({ email });

      return { user, token /*, success: math */ };
    },
    /*logout: async (_: any, {}, { res }: ExpressContext) => {
      res.clearCookie("token");
      return { success: true };
    },*/
  },
  Mutation: {
    addUser: async (_: any, args: MutationAddUserArgs) => {
      let data: UserInfos;
      try {
        data = await new UserService().createUser(args);
        return data;
      } catch (error) {
        console.log(error);
        throw new Error('erreur');
      }
    },

    addRole: async (_: any, args: any) => {
      try {
        return await new UserService().createRole(args);
      } catch (error: any) {
        //console.log(error);
        throw new Error(error.message);
      }
    },

    addUserAddress: async (_: any, args: MutationAddUserAddressArgs) => {
      try {
        return await new UserService().createUserAddress(args);
      } catch (error) {
        console.log(error);
        throw new Error('erreur');
      }
    },

    updateUser: async (_: any, args: MutationUpdateUserArgs) => {
      try {
        let data = await new UserService().updateUser(args);
        console.log('resolver success ', data);
        return data;
      } catch (error) {
        console.log('ERROR update');
      }
    },
  },
};
