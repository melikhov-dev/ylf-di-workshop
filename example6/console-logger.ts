import {ILogger} from "./ILogger";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class ConsoleLogger implements ILogger {
    constructor() {
        console.log('Logger initialized');
    }
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