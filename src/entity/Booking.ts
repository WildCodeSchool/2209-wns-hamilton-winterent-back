import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
} from "typeorm";
import Order from "./Order";
import Product from "./Product";

@Entity()
export default class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(() => Order, (order) => order.bookings)
  order: Order;

  @ManyToOne(() => Product, (product) => product.bookings)
  product: Product;
}
