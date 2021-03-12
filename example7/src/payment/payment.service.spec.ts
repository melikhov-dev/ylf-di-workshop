import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';
import * as sinon from "sinon";
import {AbstractLoggerService} from "../logger";
import {LoggerModule} from "../logger/logger.module";

class MockedLogger extends AbstractLoggerService {
  error(msg: string): void {
  }
  info(msg: string): void {
  }
  warn(msg: string): void {
  }
}

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const mockedLogger = sinon.createStubInstance(MockedLogger);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          PaymentService,
        {
          provide: AbstractLoggerService,
          useValue: mockedLogger
        }
      ],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be true', () => {
    expect(service.sendMoney()).toBe(true);
  });
});
