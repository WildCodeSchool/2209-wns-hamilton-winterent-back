import UserService from "../services/user.service";
import bcrypt from "bcrypt";
import { checkRights, generateToken } from "../lib/utilities";
import { ICreateUser, ILoginUserInput } from "./user.resolver.spec";
import { ApolloError, ExpressContext } from "apollo-server-express";
// import {
//   MutationAddUserAddressArgs,
//   MutationAddUserArgs,
//   UserInfos,
// } from "../generated/graphql";
//import { } from './user.resolver.spec';
//const users: array<IUser> = [];

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
    login: async (_: any, args: ILoginUserInput, res: ExpressContext) => {
      //check email et password et retourner le token

      const { email, password } = args;
      let user = await new UserService().findUserByEmail(email);
      console.log(user);

      if (!user) {
        throw new ApolloError("Cet utilisateur n'existe pas");
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new ApolloError("Vérifiez vos informations");
      }
      console.log(match);

      //const {email: string} = user
      let token = generateToken({ email });
      //console.log(user)
      return { user, token /*, success: math */ };
    },
    /*logout: async (_: any, {}, { res }: ExpressContext) => {
      res.clearCookie("token");
      return { success: true };
    },*/
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const {
        firstname,
        lastname,
        email,
        password,
        gender,
        role,
        birthdate,
        phoneNumber,
      } = args;
      let data: any; //créer interface
      try {
        data = await new UserService().createUser({
          firstname,
          lastname,
          email,
          password,
          gender,
          role,
          phoneNumber,
          birthdate,
        });
        return data;
      } catch (error) {
        console.log(error);
        throw new Error("erreur");
        // return false;
      }
    },

    addUserAddress: async (_: any, args: any) => {
      try {
        let data = await new UserService().createUserAddress(args);
      } catch (error) {
        console.log(error);
        throw new Error("erreur");
      }
    },
  },
};
