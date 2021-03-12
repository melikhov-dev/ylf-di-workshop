import {Injectable} from '@nestjs/common';
import {AbstractLoggerService} from "../logger";

@Injectable()
export class PaymentService {
    constructor(private readonly _logger: AbstractLoggerService) {}
    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}
