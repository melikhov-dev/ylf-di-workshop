import {ILogger} from "./types";

export class PaymentService {
    static create({ logger }: { logger: ILogger }) {
        return new PaymentService(logger);
    }

    constructor(
        private readonly _logger:ILogger,
    ) {}
    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}
