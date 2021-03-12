import { Module } from '@nestjs/common';
import { ConsoleLoggerService } from './console-logger/console-logger.service';
import { PinoLoggerService } from './pino-logger/pino-logger.service';
import {LOGGER_TOKEN} from "./constants";
import {AbstractLoggerService} from "./abstract-logger.service";

@Module({
  providers: [
      ConsoleLoggerService,
      PinoLoggerService,
      {
          provide: AbstractLoggerService,
          useFactory: (consoleLoggerService, pinoLoggerService) => {
              return process.env.NODE_ENV === 'production'
                ? pinoLoggerService
                : consoleLoggerService
          },
          inject: [ConsoleLoggerService, PinoLoggerService]
      }
  ],
  exports: [
      AbstractLoggerService
  ]
})
export class LoggerModule {}
