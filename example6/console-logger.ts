import { injectable } from "inversify";
import {ILogger} from "./types";
import "reflect-metadata";

@injectable()
export class ConsoleLogger implements ILogger {
    constructor() {
        console.log('Create new logger')
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