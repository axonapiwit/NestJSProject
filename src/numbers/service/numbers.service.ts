import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NumberDocument } from '../schemas/numbers.schema';

@Injectable()
export class NumbersService {
    constructor(@InjectConnection(Number.name) private numberModel: Model<NumberDocument>) { }

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

    getCreateDate(createDate: Date) {
        return "CreateBy: " + Date;
    }

    getPrimeNumber(primeNumber: number) {
        let array = [];
        for (let i = 2; i < primeNumber; i++) {
            let checkPrime = this.checkPrimeNumber(i);
            if (checkPrime == i) {
                array.push(i);
            }
        }
        return array;
    }


}