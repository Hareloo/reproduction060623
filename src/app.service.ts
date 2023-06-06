// If you put it here it works
// import { config } from 'dotenv';
// config({ path: 'test.env' });
// console.log(process.env.TEST);

import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    queue: process.env.TEST,
    routingKey: 'q',
    exchange: 'test_e',
    createQueueIfNotExists: true,
  })
  handleMsg(msg: object): void {
    console.log(msg);
  }
}
