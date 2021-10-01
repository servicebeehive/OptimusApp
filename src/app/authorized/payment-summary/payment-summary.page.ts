/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentSummary } from 'src/app/models/payment-summary';
import { PlanService } from 'src/app/services/plan/plan.service';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.page.html',
  styleUrls: ['./payment-summary.page.scss'],
})
export class PaymentSummaryPage implements OnInit {
  constructor(
    public modalController: ModalController,
    public planService: PlanService
  ) {}

  ngOnInit() {}

  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  public async onPurchase() {
    const paymentSummary = new PaymentSummary();
    paymentSummary.amount = 100;
    paymentSummary.name = 'sumant';
    paymentSummary.phone = '534343434';
    const data = await this.planService.postPayment(paymentSummary);
    console.log('data', data);
  }
}
