import {PaymentService} from "./payment.service";
import {ConsoleLogger} from "./console-logger";
import {Container} from "inversify";
import {ILogger} from "./types";
const myContainer = new Container();

myContainer.bind<ILogger>('logger').to(ConsoleLogger).inSingletonScope();
myContainer.bind(PaymentService).toSelf();

const logger = myContainer.get('logger');

const paymentService = myContainer.get(PaymentService);
paymentService.sendMoney();