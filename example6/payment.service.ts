import { injectable, inject } from "inversify";
import {ILogger} from "./types";
import "reflect-metadata";

@injectable()
export class PaymentService {
    constructor(
        @inject('logger') private readonly _logger:ILogger,
        @inject('logger') private readonly _logger2:ILogger,
        @inject('logger') private readonly _logger3:ILogger
    ) {}
    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}