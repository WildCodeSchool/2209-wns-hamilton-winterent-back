import User from '../entity/User'
import { GraphQLObjectType } from "graphql";

const user = new User()
export const userResolver = {
    Query: {
        users: () => User,
    },
    Mutation: {
        addUser: async (_:GraphQLObjectType, args: any) => {
            const { firstname, lastname, email, password} = args;
            try {
                await user.create({
                    firstname,
                    lastname,
                    email,
                    password
                });

                await user.save();

                return true;
            } catch (error) {
                return false;
            }
        }

    }
}


// Mutation: {
//    login: async (_, { email }, { dataSources }) => {
//      const user = await dataSources.userAPI.findOrCreateUser({ email });
//      if (user) {
//        user.token = Buffer.from(email).toString('base64');
//        return user;
//      }
//    },
//  },