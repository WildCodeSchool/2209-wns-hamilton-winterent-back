import * as jwt from "jsonwebtoken";
import { IGenerateToken } from "./IUtilities";
import UserService from "../services/user.service";
import { RoleType, User } from "../generated/graphql";
const SECRET_KEY = "sdngzhfbjhsuygshbjfysgfbs";

//fonction permettant de générer un token
export function generateToken(infos: IGenerateToken) {
  let token = jwt.sign(infos, SECRET_KEY, { expiresIn: "2h" });
  return token;
}

export function getUserFromToken(authorization: any) {
  return new Promise((resolve, reject) => {
    if (authorization) {
      let token = authorization.split(" ")[1];
      try {
        jwt.verify(token, SECRET_KEY, async (err: any, payload: any) => {
          let userLogged = await new UserService().findUserByEmail(
            payload?.email
          );
          resolve(userLogged);
        });
      } catch (err) {
        reject(err);
      }
    } else {
      resolve(null);
    }
  });
}

/**
 *
 * Méthode qui va venir s'alimenter petit à petit pour vos droits
 */
export function checkRights(userLogged: any, rights?: [RoleType]): boolean {
  if (!userLogged) {
    throw new Error("Vous devez être connectés");
  } else if (rights?.includes(userLogged.role.role)) {
    return true;
  } else throw new Error("Vous n'avez pas accès à cette ressource");
}
