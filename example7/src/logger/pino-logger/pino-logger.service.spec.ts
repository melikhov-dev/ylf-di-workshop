import { Test, TestingModule } from '@nestjs/testing';
import { PinoLoggerService } from './pino-logger.service';

describe('PinoLoggerService', () => {
  let service: PinoLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PinoLoggerService],
    }).compile();

    service = module.get<PinoLoggerService>(PinoLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
