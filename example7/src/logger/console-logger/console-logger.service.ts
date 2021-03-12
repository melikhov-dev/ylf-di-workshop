import { Injectable } from '@nestjs/common';
import {AbstractLoggerService} from "../abstract-logger.service";

@Injectable()
export class ConsoleLoggerService extends AbstractLoggerService{
    error(msg: string): void {
        console.log(msg);
    }

    info(msg: string): void {
        console.log(msg);
    }

    warn(msg: string): void {
        console.log(msg);
    }

}
