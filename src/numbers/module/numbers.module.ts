import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NumbersController } from '../controller/numbers.controller';
import { NumberSchema } from '../schemas/numbers.schema';
import { NumbersService } from '../service/numbers.service';


@Module({
  imports:[NumbersModule],
  controllers: [NumbersController],
  providers: [NumbersService]
})
export class NumbersModule { }
