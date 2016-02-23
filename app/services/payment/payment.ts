import { Payment } from './../../model/payment';
import { PAYMENTS } from './../../model/mock/mock-payments';
import { Injectable } from 'angular2/core';

@Injectable()
export class PaymentService {
  setPayment(pment: Payment){
    var iii = PAYMENTS[PAYMENTS.length-1];
    console.log(iii);
    // test.id = iii+1;
    return PAYMENTS.push(pment);
  }
  getPayments() {
    return Promise.resolve(PAYMENTS);
  }

  // See the "Take it slow" appendix
  getPaymentsSlowly() {
    return new Promise<Payment[]>(resolve =>
      setTimeout(()=>resolve(PAYMENTS), 2000) // 2 seconds
    );
  }

	getPayment(id: number) {
    return Promise.resolve(PAYMENTS).then(
      payments => payments.filter(payment => payment.id === id)[0]
    );
  }
  getS() {
    return Promise.resolve(PAYMENTS).then(
      payments => payments.filter(payment => payment.status === 1).map(payment => payment.amount)
    );
  }
}
