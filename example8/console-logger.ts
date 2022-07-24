import { ILogger } from "./ILogger"

export class ConsoleLogger implements ILogger {
  constructor() {
    console.log("Logger initialized")
  }
  error(msg: string): void {
    console.log(msg)
  }

  info(msg: string): void {
    console.log(msg)
  }

  warn(msg: string): void {
    console.log(msg)
  }
}
