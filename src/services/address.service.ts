import { Repository } from "typeorm";
import Address from "../entity/Address";
import datasource from "../lib/datasource";

class AddressService {
  addressRepository: Repository<Address>;

  constructor() {
    this.addressRepository = datasource.getRepository(Address);
  }

  async findById(id: string) {
    return await this.addressRepository.findOneBy({ id });
  }

  async getById(id: string) {
    return await this.addressRepository.findOneByOrFail({ id });
  }

  async deleteById(id: string) {
    return await this.addressRepository.delete({ id });
  }
}

export default AddressService;
