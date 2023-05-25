import { MutationAddOrderArgs } from "../generated/graphql";
import OrderService from "../services/order.service";

export default {
  Mutation: {
    addOrder: async (_: any, args: MutationAddOrderArgs) => {
      const { orderInfos } = args;

      try {
        let data = await new OrderService().createOrder(orderInfos);

        return data;
      } catch (error) {
        console.log(error);
        throw new Error("error");
      }
    },
  },
};
