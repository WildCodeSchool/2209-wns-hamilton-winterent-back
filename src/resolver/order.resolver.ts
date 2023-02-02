
import { checkRights, generateToken } from "../lib/utilities";
import { ICreateUser, ILoginUserInput } from "./user.resolver.spec";
import { ApolloError, ExpressContext } from "apollo-server-express";
import OrderService from "../services/order.service";



export default {
    Query: {
        orders: async(_: any, args: any, ) => {
            return await new OrderService().findAll();
        }
        
    },
        order: async (_: any, args: any) => {
            const { id } = args;
            return await new OrderService().findOrder(id);
        },

        booking: async (_: any, args: any) => {
            const {id} = args;
            return await new OrderService().findBooking(id)
        }
}