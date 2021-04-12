import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NumberDto, NumberIdDto } from '../dto/numbers.dto';
import { Numbers, NumbersDocument } from '../schemas/numbers.schema';

@Injectable()
export class NumbersService {
    constructor(@InjectModel("Numbers") private readonly numberModel: Model<NumbersDocument>) { }

    checkPrimeNumber(primeNumber: number): number {
        let isPrime = true;

        for (let i = 2; i < primeNumber; i++) {
            if (primeNumber % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return primeNumber;
        }
    }

    getPrimeNumber(number: NumberDto): number[] {
        let array = [];
        for (let i = 2; i < number.number; i++) {
            let checkPrime = this.checkPrimeNumber(i);
            if (checkPrime == i) {
                array.push(i);
            }
        }
        return array;
    }

    // Create PrimeNumber
    async create(numberDto: NumberDto): Promise<Numbers> {
        numberDto.primeNumber = this.getPrimeNumber(numberDto);
        const newNumber = await this.numberModel.create(numberDto);
        console.log(newNumber);
        return newNumber;
    }

    // FindAll
    async findAll(): Promise<Numbers[]> {
        return await this.numberModel.find();
    }

    // FindById
    async findOne(id: string): Promise<Numbers> {
        return await this.numberModel.findOne({ _id: id });
    }

    // Delete
    async delete(id: string): Promise<Numbers> {
        return await this.numberModel.findByIdAndRemove(id);
    }

    // Put Number
    async update(numberIdDto: NumberIdDto): Promise<Numbers> {
        return await this.numberModel.findByIdAndUpdate(numberIdDto.id, numberIdDto);
    }

}