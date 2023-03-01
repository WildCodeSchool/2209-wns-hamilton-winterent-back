import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  roadNumber: number;

  @Column()
  streetName: string;

  @Column()
  postalCode: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
