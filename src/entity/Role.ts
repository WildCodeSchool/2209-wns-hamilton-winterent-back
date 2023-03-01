import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleType } from "../generated/graphql";
import User from "./User";
@Entity()
export default class Role {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "enum",
    enum: RoleType,
    default: RoleType.User,
  })
  role: RoleType;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
