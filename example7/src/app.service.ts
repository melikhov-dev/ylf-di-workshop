import { Injectable, Inject } from '@nestjs/common';
import { DynamicAbstractLogger } from './logger';


@Injectable()
export class AppService {
  constructor(private readonly _logger: DynamicAbstractLogger) {}
  getHello(): string {
    this._logger.info('getHello has been called.');
    return 'Hello World!';
  }
}
