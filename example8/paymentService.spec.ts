import { PaymentService, User } from "./paymentService"
import { instance, mock, resetCalls, verify, when } from "ts-mockito"
import { ILogger } from "./ILogger"
import { UserInfo } from "os"

const mockedLogger = mock<ILogger>()
when(mockedLogger.info).thenReturn(() => null)

const mockedUser = mock<User>()
when(mockedUser.name).thenReturn(() => "Big Lebowski")

describe("Payment service test", () => {
  beforeEach(() => {
    resetCalls(mockedLogger)
  })
  it("Should be true", () => {
    const logger = instance(mockedLogger)
    const paymentService = new PaymentService(logger, mockedUser)
    expect(paymentService.sendMoney()).toBe(true)
    verify(mockedLogger.info).once()
  })
})
