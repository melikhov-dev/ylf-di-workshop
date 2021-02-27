import {PaymentService} from "./payment.service";
import {ILogger} from "./types";
import {mock, when, instance, verify, resetCalls} from 'ts-mockito';
import {Context} from "./context";
const mockedLogger: ILogger = mock<ILogger>();

when(mockedLogger.info).thenReturn(() => null);

describe('PaymentService test', () => {
    beforeAll(() => {
        resetCalls(mockedLogger);
    })
    test('Should be true', () => {
        Context.logger = instance(mockedLogger);
        const paymentService = new PaymentService();
        expect(paymentService.sendMoney()).toBe(true);
        verify(mockedLogger.info).once();
    })
})