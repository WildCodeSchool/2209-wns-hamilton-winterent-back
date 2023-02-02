import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { StatusType } from "../generated/graphql";
import Booking from "./Booking";
import User from "./User";

@Entity()
export default class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: Date;

  
  @Column({type: "enum", enum : StatusType, default: StatusType.Inprogress})
  status: StatusType;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => Booking, (booking) => booking.order)
  bookings: Booking[];
}

