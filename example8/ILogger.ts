export interface ILogger {
  error: (msg: string) => void
  warn: (msg: string) => void
  info: (msg: string) => void
}
