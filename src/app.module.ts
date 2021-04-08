import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumbersModule } from './numbers/module/numbers.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/primenumber', {
    connectionName: 'numbers',
  }), NumbersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }