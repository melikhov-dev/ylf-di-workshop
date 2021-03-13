import {ILogger} from "./ILogger";
import {ConsoleLogger} from "./console-logger";

export class PaymentService {
    public logger: ILogger
    constructor() {
        this.logger = new ConsoleLogger();
    }

    sendMoney() {
        this.logger.info('Info');
        return true;
    }
}