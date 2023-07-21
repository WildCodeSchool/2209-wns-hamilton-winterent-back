import Booking from "../entity/Booking";
import Order from "../entity/Order";
import { OrderInput } from "../generated/graphql";
import datasource from "../lib/datasource";
import ProductService from "./product.service";

class OrderService {
  orderRepository;
  bookingRepository;

  constructor() {
    this.orderRepository = datasource.getRepository(Order);
    this.bookingRepository = datasource.getRepository(Booking);
  }

  async findOrderById(id: string) {
    return await this.orderRepository.findOneBy({ id });
  }

  async findOrderByUserId(id: string) {
    return await this.orderRepository.find({ where: { user: { id: id } } });
  }

  async createOrder({
    bookings,
    userId,
  }: OrderInput): Promise<Order | undefined> {
    if (bookings) {
      let newOrder = await this.orderRepository.save({
        user: { id: userId },
        date: new Date(),
      });

      let finalOrder = await this.findOrderById(newOrder.id);

      for (let i = 0; i < bookings.length; i++) {
        if (finalOrder) {
          const productShop = await new ProductService().findProductPriceById(
            bookings[i]?.productId,
            bookings[i]?.shopId
          );

          await this.bookingRepository.save({
            startDate: bookings[i]?.startDate,
            endDate: bookings[i]?.endDate,
            product: bookings[i]?.productId,
            price: productShop.price != undefined && productShop.price,
            order: finalOrder,
          });
        }
      }

      let result = await this.findOrderById(newOrder.id);

      if (result) return result;
    }
  }
}

export default OrderService;
