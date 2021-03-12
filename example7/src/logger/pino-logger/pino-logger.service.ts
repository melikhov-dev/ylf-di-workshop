import { Injectable } from '@nestjs/common';
import {AbstractLoggerService} from "../abstract-logger.service";

@Injectable()
export class PinoLoggerService extends AbstractLoggerService{
    error(msg: string): void {
    }

    info(msg: string): void {
    }

    warn(msg: string): void {
    }
}
