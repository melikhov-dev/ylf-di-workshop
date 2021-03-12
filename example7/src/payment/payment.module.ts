import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import {LoggerModule} from "../logger/logger.module";

@Module({
  providers: [
      PaymentService
  ],
  imports: [LoggerModule]
})
export class PaymentModule {}
