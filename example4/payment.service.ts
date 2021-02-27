import {Context} from "./context";

export class PaymentService {
    sendMoney() {
        Context.logger.info('Info');
        return true;
    }
}