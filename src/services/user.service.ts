import datasource from "../lib/datasource";
import User from "../entity/User";
import Role from "../entity/Role";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utilities";
import {
  MutationAddUserAddressArgs,
  MutationAddUserArgs,
  MutationUpdateUserArgs,
  UserInfos,
} from "../generated/graphql";
import { Repository } from "typeorm";
import Address from "../entity/Address";

const SALT_ROUND = 10;

class UserService {
  userRepository: Repository<User>;
  addressRepository: Repository<Address>;
  roleRepository: Repository<Role>;
  constructor() {
    this.userRepository = datasource.getRepository(User);
    this.addressRepository = datasource.getRepository(Address);
    this.roleRepository = datasource.getRepository(Role);
  }

  async findUser(id: string) {
    return await this.userRepository.findOneBy({ id });
  }
  async findUserByEmail(email: string) {
    console.log("test");
    return await this.userRepository.findOneBy({ email });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(args: MutationAddUserArgs): Promise<UserInfos> {
    let {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      gender,
      role,
      birthdate,
      phoneNumber,
    } = args.user;
    if (password != confirmPassword) {
      throw new Error("Les mots de passes ne sont pas identiques");
    } else {
      let hash = await bcrypt.hash(password, SALT_ROUND);
      let token = generateToken({ email });
      let roleEntity = await this.roleRepository.findOne({
        where: { role },
      });
      if (!roleEntity) {
        throw new Error("Le role n'existe pas");
      }

      let user = await this.userRepository.save({
        firstname,
        lastname,
        email,
        password: hash,
        gender,
        birthdate,
        phoneNumber,
        role: roleEntity,
      });

      let result: UserInfos = {
        user: {
          id: user.id,
          email: user.email,
          firstname: user.firstname,
        },
        token: token,
      };

      return result;
    }
  }

  async createUserAddress({ id, address }: MutationAddUserAddressArgs) {
    let user = await this.findUser(id);

    if (!user) {
      throw new Error("utilisateur non trouvé");
    }

    const newAddress = await this.addressRepository.save({
      roadNumber: address.roadNumber,
      streetName: address.streetName,
      city: address.city,
      country: address.country,
    });
    await this.userRepository.update(id, { address: newAddress });
  }

  async updateUser({ user }: MutationUpdateUserArgs) {
    try {
      const currentUser = this.findUser(user.id);
      if (!user) {
        throw new Error("Utilisateur introuvable");
      }
      //await this.userRepository.update(id, {});
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default UserService;
