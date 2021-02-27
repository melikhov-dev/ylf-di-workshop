import { Injectable } from '@nestjs/common';
import {ILogger} from "../types";
import {AbstractLogger} from "../abstract-logger";

@Injectable()
export class ConsoleLoggerService extends AbstractLogger{
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
