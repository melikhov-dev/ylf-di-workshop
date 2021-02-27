import {ILogger} from "./types";

export class PaymentService {
    constructor(private readonly _logger: ILogger) {}
    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}