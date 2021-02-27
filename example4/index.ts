import {PaymentService} from "./payment.service";
import {PinoLogger} from "./pino-logger";
import {ConsoleLogger} from "./console-logger";
import {Context} from "./context";
const logger = process.env.NODE_ENV === 'production' ? new PinoLogger() : new ConsoleLogger();
Context.logger = logger;
const paymentService = new PaymentService();
paymentService.sendMoney();