import {ILogger} from "./types";


export class AbstractLogger implements ILogger {
    error(msg: string): void {
    }

    info(msg: string): void {
    }

    warn(msg: string): void {
    }

}