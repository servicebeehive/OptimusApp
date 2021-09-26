import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentDetails } from 'src/app/models/payment-details.mode';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
import { ReturnResult } from 'src/app/models/return-result';
import { PlanService } from 'src/app/services/plan/plan.service';
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

  public paymentOptions: PaymentDetails[] = [];

  constructor(
    public sharedService: SharedService,
    public modalController: ModalController,
    public planService: PlanService
  ) {}

  ngOnInit() {
    if (this.sharedService.checkLoginType) {
      this.purchasePlanDetails = this.sharedService.planDetails;
    }
    this.getPaymentMethods();
  }

  public async onClickPaymentSummary() {
    const model = await this.modalController.create({
      component: PaymentSummaryPage,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }

  public async getPaymentMethods() {
    const result: ReturnResult<PaymentDetails[]> =
      await this.planService.getPayMethodDetails();
    if (result.success) {
      this.paymentOptions = result.data;
    }
  }
}
