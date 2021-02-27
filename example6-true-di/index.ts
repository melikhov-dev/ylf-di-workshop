import {PaymentService} from "./payment.service";
import {ConsoleLogger} from "./console-logger";
import diContainer from "true-di";

const container = diContainer({
    logger: ConsoleLogger.create,
    paymentService: PaymentService.create,
});

container.paymentService.sendMoney();
