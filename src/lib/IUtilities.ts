import { Role, RoleType } from "../generated/graphql";

export interface IGenerateToken {
  email: string;
  role: RoleType;
}
