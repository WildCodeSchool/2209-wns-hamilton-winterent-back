import datasource from "../lib/datasource";
import Booking from "../entity/Booking";
import { Repository } from "typeorm";


class BookingService {
  
    bookingRepository: Repository<Booking>;
    constructor() {
        this.bookingRepository = datasource.getRepository(Booking);

    }

    async findAll() {
        return await this.bookingRepository.find()
    }
    // async findBooking(id : number) {
    //     return await this.bookingRepository.findOneBy({id})
    // };
    async findBookingByDate(startDate : Date) {
        return await this.bookingRepository.findOneBy({startDate})
    };


};
 

export default BookingService;