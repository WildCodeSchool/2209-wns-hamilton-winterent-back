import Booking from "../entity/Booking";
import Order from "../entity/Order";
import { OrderInput } from "../generated/graphql";
import datasource from "../lib/datasource";

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

  async createOrder({ bookings }: OrderInput): Promise<Order | undefined> {
    if (bookings) {
      let newOrder = await this.orderRepository.save({
        date: new Date(),
      });

      let finalOrder = await this.findOrderById(newOrder.id);
      console.log("final order", finalOrder);

      console.log("bookings", bookings);
      for (let i = 0; i < bookings.length; i++) {
        if (finalOrder) {
          const newBooking = await this.bookingRepository.save({
            startDate: bookings[i]?.startDate,
            endDate: bookings[i]?.endDate,
            product: bookings[i]?.product,
            order: finalOrder,
          });
          console.log("saveBooking", newBooking);
        }
      }

      let result = await this.findOrderById(newOrder.id);
      console.log("final order", result);

      if (result) return result;
    }
  }
}

export default OrderService;
