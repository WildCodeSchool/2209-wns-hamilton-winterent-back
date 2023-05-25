import {
  MutationAddOrderArgs,
  QueryGetOrderByIdArgs,
  QueryGetOrderByUserIdArgs,
} from '../generated/graphql';
import OrderService from '../services/order.service';

export default {
  Query: {
    getOrderById: async (_: any, args: QueryGetOrderByIdArgs) => {
      return await new OrderService().findOrderById(args.orderId);
    },

    getOrderByUserId: async (_: any, args: QueryGetOrderByUserIdArgs) => {
      return await new OrderService().findOrderByUserId(args.userId);
    },
  },

  Mutation: {
    addOrder: async (_: any, args: MutationAddOrderArgs) => {
      const { orderInfos } = args;

      try {
        let data = await new OrderService().createOrder(orderInfos);

        return data;
      } catch (error) {
        console.log(error);
        throw new Error('error');
      }
    },
  },
};
