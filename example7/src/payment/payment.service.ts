import {Injectable, Scope} from '@nestjs/common';
import {AbstractLogger} from "../logger/abstract-logger";

@Injectable()
export class PaymentService {
    constructor(private readonly _logger: AbstractLogger) {}

    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}
