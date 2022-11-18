import datasource from '../lib/datasource';
import User from '../entity/User';
import bcrypt from 'bcrypt';
import {
  ICreateUser,
  ILoginUserInput,
  IUser,
} from '../resolver/user.resolver.spec';
import { generateToken } from '../lib/utilities';

const SALT_ROUND = 10;

class UserService {
  repository;
  constructor() {
    this.repository = datasource.getRepository(User);
  }

  async findUser(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async createUser({ firstname, lastname, email, password }: ICreateUser) {
    let hash = await bcrypt.hash(password, SALT_ROUND);

    // let newUser = new User();
    // newUser.firstname = firstname;
    // newUser.lastname = lastname;
    // newUser.email = email;
    // newUser.password = hash;

   
    let token = generateToken({ email });

    console.log(token)
    // res.cookie("token", token, {
    //   secure: process.env.NODE_ENV === "production",
    //   httpOnly: true, //le httpOnly n'est pas accessible via du code JS, ça limite un peu les injection XSS (mais ce n'est pas infaillible comme précisé plus haut)
    //   maxAge: 1000 * 60 * 60 * 2, //2 heures
    // });
 

  return await this.repository.save({ firstname, lastname, email, password });
  }
}

export default UserService;
