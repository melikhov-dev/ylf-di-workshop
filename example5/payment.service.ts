import {Locator} from "./locator";
import {ILogger} from "./types";

export class PaymentService {
    sendMoney() {
        const logger = Locator.getService<ILogger>('logger');
        logger.info('Info');
        return true;
    }
}