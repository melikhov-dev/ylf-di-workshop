import {ILogger} from "./ILogger";
import {Context} from "./context";

export class PaymentService {
    constructor() {}

    sendMoney() {
        const logger: ILogger = Context.logger;
        logger.info('Info');
        return true;
    }
}