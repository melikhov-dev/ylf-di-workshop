import {ILogger} from "./ILogger";
import {inject, injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class PaymentService {
    constructor(
        @inject('logger') private readonly _logger: ILogger,
        @inject('logger') private readonly _logger2: ILogger,
        @inject('logger') private readonly _logger3: ILogger
    ) {}
    sendMoney() {
        const logger: ILogger = this._logger;
        logger.info('Info');
        return true;
    }
}