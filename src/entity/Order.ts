import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Booking from "./Booking";
import User from "./User";
import { StatusType } from "../generated/graphql";

@Entity()
export default class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: Date;

  @Column({
    type: "enum",
    enum: StatusType,
    default: StatusType.Inprogress,
  })
  status: StatusType;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
  @OneToMany(() => Booking, (booking) => booking.order, { eager: true })
  bookings: Booking[];
}
