import {ILogger} from "./types";

export class PaymentService {
    sendMoney(logger: ILogger) {
        logger.info('Info');
        return true;
    }
}