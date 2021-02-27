import {ILogger} from "./types";

export class PaymentService {
    public logger: ILogger;
    sendMoney() {
        this.logger.info('Info');
        return true;
    }
}