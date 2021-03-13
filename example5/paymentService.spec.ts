import {PaymentService} from "./paymentService";
import {instance, mock, resetCalls, verify, when} from "ts-mockito"
import {ILogger} from "./ILogger";
import {Locator} from "./locator";

const mockedLogger = mock<ILogger>();
when(mockedLogger.info).thenReturn(() => null);

describe('Payment service test', () => {
    beforeEach(() => {
        resetCalls(mockedLogger);
    })
    it("Should be true", () => {
        const paymentService = new PaymentService();
        const logger = instance(mockedLogger);
        Locator.register('logger', logger);
        expect(paymentService.sendMoney()).toBe(true);
        verify(mockedLogger.info).once();
    })
})