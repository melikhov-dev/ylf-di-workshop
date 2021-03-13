import {ILogger} from "./ILogger";

export class PaymentService {
    constructor() {}

    sendMoney(logger: ILogger) {
        logger.info('Info');
        return true;
    }
}