import {PaymentService} from "./payment.service";
import {ILogger} from "./types";
import {mock, when, instance, verify, resetCalls} from 'ts-mockito';
const mockedLogger: ILogger = mock<ILogger>();

when(mockedLogger.info).thenReturn(() => null);

describe('PaymentService test', () => {
    beforeAll(() => {
        resetCalls(mockedLogger);
    })
    test('Should be true', () => {
        const paymentService = new PaymentService();
        paymentService.logger = instance(mockedLogger);
        expect(paymentService.sendMoney()).toBe(true);
        verify(mockedLogger.info).once();
    })
})