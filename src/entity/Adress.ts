import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roadNumber: number;

  @Column()
  streetName: string;

  @Column()
  city: string;

  @Column()
  country: string;
}