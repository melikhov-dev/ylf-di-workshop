import {ILogger} from "./ILogger";

export class PaymentService {
    constructor(private readonly _logger: ILogger) {}

    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}