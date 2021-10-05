import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
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

  addPurchaseDetail = this.fb.group({
    buyMH: ['', [Validators.required]],
  });

  constructor(
    public sharedService: SharedService,
    public modalController: ModalController,
    public planService: PlanService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.sharedService.checkLoginType) {
      this.purchasePlanDetails = this.sharedService.planDetails;
    }
  }

  public async onClickPaymentSummary() {
    const model = await this.modalController.create({
      component: PaymentSummaryPage,
      cssClass: 'my-custom-class',
      componentProps: {
        value: this.addPurchaseDetail.value.buyMH,
        purchasePlanDetails: this.purchasePlanDetails,
      },
    });
    await model.present();
  }
}
