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
import Address from "./Address";
import Order from "./Order";
import Role from "./Role";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({ nullable: true })
  gender: GenderType;

  @Column({ nullable: true })
  phoneNumber: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
}

export enum GenderType {
  MAN = "Homme",
  WOMAN = "Femme",
  CHILD = "Enfant",
}
