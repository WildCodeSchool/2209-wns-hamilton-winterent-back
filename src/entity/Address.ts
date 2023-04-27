import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  roadNumber: number;

  @Column({ nullable: true })
  streetName: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;
}
