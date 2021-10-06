import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
import { PurchaseFlowDetails } from 'src/app/models/purchase-flow.model';
import { PurchasePlanID } from 'src/app/models/purchase-plan.model';
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
  public totalAmount = 0;

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

  public async onClickPaymentSummary(transactionID: number) {
    const model = await this.modalController.create({
      component: PaymentSummaryPage,
      cssClass: 'my-custom-class',
      componentProps: {
        value: transactionID,
      },
    });
    await model.present();
  }

  public calculateTotalAmount(eve) {
    this.totalAmount =
      Number(eve.target.value) * 3000 -
      Number(
        (eve.target.value * 3000 * this.purchasePlanDetails.discount) / 100
      ) +
      Number(
        (eve.target.value * 3000 * this.purchasePlanDetails.maintenanceper) /
          100
      );
  }

  public async onClickPayment() {
    if (this.totalAmount === 0) {
      return;
    }
    const purchaseFlowDetails = new PurchaseFlowDetails();
    purchaseFlowDetails.planid = this.purchasePlanDetails.planid;
    purchaseFlowDetails.price = this.purchasePlanDetails.perunitinrprice;
    purchaseFlowDetails.discount = this.purchasePlanDetails.discount;
    purchaseFlowDetails.maintenancecharge =
      this.purchasePlanDetails.maintenanceper;
    purchaseFlowDetails.totalamount = this.totalAmount;
    purchaseFlowDetails.unit = Number(this.addPurchaseDetail.value.buyMH);
    purchaseFlowDetails.operationtype = 'BUY';
    this.planService
      .postPayment(purchaseFlowDetails)
      .then((res: ReturnResult<PurchasePlanID[]>) => {
        if (res.success) {
          this.onClickPaymentSummary(res.data[0].inserted);
        }
      });
  }
}
