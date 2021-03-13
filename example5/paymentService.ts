import {ILogger} from "./ILogger";
import {Locator} from "./locator";

export class PaymentService {
    constructor() {}
    
    sendMoney() {
        const logger: ILogger = Locator.getService<ILogger>('logger');
        logger.info('Info');
        return true;
    }
}