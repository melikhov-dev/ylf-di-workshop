import {ILogger} from "./types";

export class Context {
    static get logger(): ILogger {
        return this._logger;
    }

    static set logger(value: ILogger) {
        this._logger = value;
    }
    private static _logger: ILogger;
}