import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export default class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
