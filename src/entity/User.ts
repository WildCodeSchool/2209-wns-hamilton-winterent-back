import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { GenderType } from "../generated/graphql";
import Address from "./Address";
import Order from "./Order";
import Role from "./Role";

@Entity()
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  @Unique(["email"])
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  birthdate: Date;

  @Column({
    nullable: true,
    type: "enum",
    enum: GenderType,
  })
  gender: GenderType;

  @Column({ nullable: true })
  phoneNumber: string;

  @ManyToOne(() => Role, (role) => role.users, { eager: true })
  role!: Role;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;
}
