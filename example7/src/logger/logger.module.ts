import { Module } from '@nestjs/common';
import { ConsoleLoggerService } from './console-logger/console-logger.service';
import { PinoLoggerService } from './pino-logger/pino-logger.service';
import { AbstractLoggerService, DynamicAbstractLogger } from "./abstract-logger.service";
import { ModuleRef, REQUEST } from '@nestjs/core';

@Module({
  providers: [
    PinoLoggerService,
    ConsoleLoggerService,
    {
      provide: AbstractLoggerService,
      useClass: process.env.NODE_ENV === 'production'
        ? PinoLoggerService
        : ConsoleLoggerService,
    },
    {
      provide: DynamicAbstractLogger,
      useFactory: (req: Request, moduleRef: ModuleRef) =>
        req.headers['x-log-format'] === 'production'
          ? moduleRef.resolve(PinoLoggerService) // curl -H "X-LOG-FORMAT: production" http://localhost:3000
          : moduleRef.resolve(ConsoleLoggerService), // curl -H http://localhost:3000
      inject: [ REQUEST, ModuleRef ]
    }
  ],
  exports: [
    AbstractLoggerService,
    DynamicAbstractLogger,
  ]
})
export class LoggerModule {}
