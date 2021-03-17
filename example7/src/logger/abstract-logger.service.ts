import {ILogger} from "./ILogger";

export abstract class AbstractLoggerService implements ILogger {
    abstract error(msg: string): void;

    abstract info(msg: string): void;

    abstract warn(msg: string): void;
}

export abstract class DynamicAbstractLogger extends AbstractLoggerService {};