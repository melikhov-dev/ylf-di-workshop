import { Test, TestingModule } from '@nestjs/testing';
import { ConsoleLoggerService } from './console-logger.service';

describe('ConsoleLoggerService', () => {
  let service: ConsoleLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsoleLoggerService],
    }).compile();

    service = module.get<ConsoleLoggerService>(ConsoleLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
