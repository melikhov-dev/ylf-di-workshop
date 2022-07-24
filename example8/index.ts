import { makeRoot } from "iti"
import { AuthService, PaymentService, User } from "./paymentService"
import { ConsoleLogger } from "./console-logger"
import { PinoLogger } from "./pino-logger"

// Step 1: Wiring up the container
const myContainer = makeRoot()
  .add({
    logger: () =>
      process.env.NODE_ENV === "production"
        ? new PinoLogger()
        : new ConsoleLogger(),
  })
  .add({ auth: new AuthService() })
  .add((ctx) => ({
    user: async () => new User(await ctx.auth.getUserData()),
  }))
  .add((ctx) => ({
    paymentService: async () => new PaymentService(ctx.logger, await ctx.user),
  }))

// Step 2: Using the container

// Sync example
const logger = myContainer.get("logger")
logger.info("testing log")

// Async example
async function asyncExample() {
  const paymentService = await myContainer.get("paymentService")
  paymentService.sendMoney()

  // or ... a different api. Lazy Proxy getter
  const ps2 = await myContainer.containers.paymentService
  ps2.sendMoney()
}
