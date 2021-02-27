import {ILogger} from "./types";


export class ConsoleLogger implements ILogger {
    static create() {
        return new ConsoleLogger();
    }

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
