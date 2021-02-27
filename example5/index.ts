import {PaymentService} from "./payment.service";
import {PinoLogger} from "./pino-logger";
import {ConsoleLogger} from "./console-logger";
import {Locator} from "./locator";
const logger = process.env.NODE_ENV === 'production' ? new PinoLogger() : new ConsoleLogger();
Locator.register('logger', logger);
const paymentService = new PaymentService();
paymentService.sendMoney();