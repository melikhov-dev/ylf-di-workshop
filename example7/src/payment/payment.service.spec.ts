import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';
import {LoggerModule} from "../logger/logger.module";
import {AbstractLogger} from "../logger/abstract-logger";
import * as sinon from 'sinon';

class MockLogger extends AbstractLogger {
  error(msg: string): void {}
  info(msg: string): void {}
  warn(msg: string): void {}
};


describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const mockedLogger = sinon.createStubInstance(MockLogger);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          PaymentService,
      ],
      imports: [
          LoggerModule
      ]
    }).overrideProvider(AbstractLogger)
        .useValue()
        .compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
