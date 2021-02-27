import { Module } from '@nestjs/common';
import { ConsoleLoggerService } from './console-logger/console-logger.service';
import { PinoLoggerService } from './pino-logger/pino-logger.service';
import {AbstractLogger} from "./abstract-logger";

@Module({
  providers: [
      ConsoleLoggerService,
      PinoLoggerService,
    {
      provide: AbstractLogger,
      useFactory: (consoleLoggerService, pinoLoggerService) => {
        return process.env.NODE_ENV === 'production'
            ? pinoLoggerService
            : consoleLoggerService;
      },
      inject: [ConsoleLoggerService, PinoLoggerService]
    }
  ],
  exports: [
    AbstractLogger
  ]
})
export class LoggerModule {}
