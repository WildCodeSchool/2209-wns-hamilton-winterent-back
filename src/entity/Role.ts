import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: Enumerator;
}
