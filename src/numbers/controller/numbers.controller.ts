import { Body, Controller, Get } from '@nestjs/common';
import { NumberDto } from '../dto/numbers.dto';
import { NumbersService } from '../service/numbers.service';

@Controller('numbers')
export class NumbersController {
    constructor(private readonly numbersService: NumbersService) { }

    @Get()
    getPrimeNumber(@Body() numberDto: NumberDto) {
        return this.numbersService.getPrimeNumber(numberDto.primeNumber);
    }

    @Get("/:date")
    getCreateDate(@Body() numberDto: NumberDto) {
        return this.numbersService.getCreateDate(numberDto.createDate);
    }

}
// Controller
//     NumbersController
//     UserController
// Module
//     NumbersService
//     UsersService
// Schema
//     NumberSchema
//     UserSchema

