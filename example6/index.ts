import {PaymentService} from "./paymentService";
import {ConsoleLogger} from "./console-logger";
import {Container} from "inversify";
import {ILogger} from "./ILogger";

const myContainer = new Container();

myContainer.bind<ILogger>('logger').to(ConsoleLogger).inRequestScope();
myContainer.bind(PaymentService).toSelf();

const paymentService = myContainer.get(PaymentService);
paymentService.sendMoney();