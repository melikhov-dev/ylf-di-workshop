


export  interface ILogger {
    warn: (msg: string) => void;
    error: (msg: string) => void;
    info: (msg: string) => void;
}