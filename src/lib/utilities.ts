import * as jwt from 'jsonwebtoken';
import { IGenerateToken } from './utilities.spec';

const SECRET_KEY = 'sdngzhfbjhsuygshbjfysgfbs';

//fonction permettant de générer un token
export function generateToken(infos: IGenerateToken) {
  let token = jwt.sign(infos, SECRET_KEY, { expiresIn: '2h' });
  return token;
}
