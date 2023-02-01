import datasource from "../lib/datasource";
import User from "../entity/User";
import bcrypt from "bcrypt";
import {
  ICreateUser,
  ILoginUserInput,
  IUser,
} from "../resolver/user.resolver.spec";
import { generateToken } from "../lib/utilities";
import {
  MutationAddUserAddressArgs,
  MutationAddUserArgs,
  UserInfos,
} from "../generated/graphql";
import { Repository } from "typeorm";
import Address from "../entity/Address";

const SALT_ROUND = 10;

class UserService {
  userRepository: Repository<User>;
  addressRepository: Repository<Address>;
  constructor() {
    this.userRepository = datasource.getRepository(User);
    this.addressRepository = datasource.getRepository(Address);
  }

  async findUser(id: number) {
    return await this.userRepository.findOneBy({ id });
  }
  async findUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findAll(): Promise<User[]> {
    console.log("test");
    return await this.userRepository.find();
  }

  async createUser({
    firstname,
    lastname,
    email,
    password,
    gender,
    birthdate,
    phoneNumber,
    role,
  }: MutationAddUserArgs): Promise<UserInfos> {
    let hash = await bcrypt.hash(password, SALT_ROUND);
    let token = generateToken({ email });
    let user = await this.userRepository.save({
      firstname,
      lastname,
      email,
      password: hash,
      //Ajouter les types dans le schéma graphql => import des types squalar...
      // gender,
      // birthdate,
      // phoneNumber,
      // role,
    });

    let result: UserInfos = {
      user: {
        id: user.id.toString(),
        email: user.email,
        firstname: user.firstname,
      },
      token: token,
    };

    return result;
  }

  async createUserAddress({ id, address }: MutationAddUserAddressArgs) {
    // Verifier le user ID, faire un getUserById ou GetShopById
    let user = await this.findUser(+id);

    if (!user) {
      throw new Error("user not found");
    }
    // Si id n'est pas null alors ajout address
    const newAddress = await this.addressRepository.save({
      roadNumber: address.roadNumber,
      streetName: address.streetName,
      city: address.city,
      country: address.country,
    });
    await this.userRepository.update(id, { address: newAddress });
  }
}

export default UserService;
