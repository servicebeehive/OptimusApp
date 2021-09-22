import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
import { SharedService } from 'src/app/services/shared/shared-service.service';
import { PaymentSummaryPage } from '../payment-summary/payment-summary.page';

@Component({
  selector: 'app-purchase-flow',
  templateUrl: './purchase-flow.page.html',
  styleUrls: ['./purchase-flow.page.scss'],
})
export class PurchaseFlowPage implements OnInit {
  public title = 'Purchase Flow';
  public purchasePlanDetails: PlanDetailsModel;

  paymentOptions = [
    {
      title: 'UPI',
      charge: '0 %',
    },
    {
      title: 'Credit Card',
      charge: '1.68 %',
    },
    {
      title: 'Debit Card',
      charge: '1.68 %',
    },
    {
      title: 'NetBanking',
      charge: '1.68%',
    },
    {
      title: 'Wallet',
      charge: '2.00 %',
    },
  ];

  constructor(
    public sharedService: SharedService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    if (this.sharedService.checkLoginType) {
      this.purchasePlanDetails = this.sharedService.planDetails;
      console.log('planDetails', this.sharedService.planDetails);
    }
  }

  public async onClickPaymentSummary() {
    const model = await this.modalController.create({
      component: PaymentSummaryPage,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }
}
