import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Booking from "./Booking";
import User from "./User";

@Entity()
export default class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: Date;

  @Column()
  status: EnumStatus;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
  @OneToMany(() => Booking, (booking) => booking.order)
  bookings: Booking[];
}

export enum EnumStatus {
  INPROGRESS = "En cours",
  CANCEL = "Annuler",
  DONE = "Terminer",
}
