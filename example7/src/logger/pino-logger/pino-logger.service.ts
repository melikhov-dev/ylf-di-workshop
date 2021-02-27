import {Injectable, Scope} from '@nestjs/common';
import {AbstractLogger} from "../abstract-logger";

@Injectable()
export class PinoLoggerService extends AbstractLogger {
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
