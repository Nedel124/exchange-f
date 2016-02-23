import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import { Payment } from './../model/payment';
import { PaymentService } from './../services/payment/payment';

// import {Title} from './services/title';
// import {XLarge} from './directives/x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'wallet',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    // Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES,
    // XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./wallet.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./wallet.html')
})
export class Wallet implements OnInit {
  payments: Payment[] = [];
  payment: Payment = {"id": 13, "status" : 1, "amount": 5.99, "name": "Bombasto"};
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  constructor(
    private _paymentService: PaymentService) {
    this.getPayments();
  }
  getPayments() {
     this._paymentService.getPayments().then(payments => this.payments = payments);
     // console.log(this.payments);
     // console.log(this._paymentService.getPayments());
  }
  addPayment(){
    this._paymentService.setPayment(this.payment);
    this.payment = {"id": 13, "status" : 1, "amount": 5.99, "name": "Bombasto"};
  }

  ngOnInit() {
    console.log('hello `wallet` component');
    console.log( this._paymentService.getS());
    // this.title.getData().subscribe(data => this.data = data);
  }
  onSubmit(){
    this.addPayment();
  }

}
