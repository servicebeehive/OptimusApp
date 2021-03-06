import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
import { PurchaseFlowDetails } from 'src/app/models/purchase-flow.model';
import { PurchasePlanID } from 'src/app/models/purchase-plan.model';
import { ReturnResult } from 'src/app/models/return-result';
import { AlertService } from 'src/app/services/alert/alert.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { PlanService } from 'src/app/services/plan/plan.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';
import { PaymentSummaryPage } from '../payment-summary/payment-summary.page';

@Component({
  selector: 'app-purchase-flow',
  templateUrl: './purchase-flow.page.html',
  styleUrls: ['./purchase-flow.page.scss'],
})
export class PurchaseFlowPage {
  public title = 'Purchase Flow';
  public purchasePlanDetails: PlanDetailsModel;
  public purchasePlanDetailsArray: PlanDetailsModel[];
  public totalAmount = 0;

  addPurchaseDetail = this.fb.group({
    buyMH: ['', [Validators.required]],
  });

  constructor(
    public sharedService: SharedService,
    public modalController: ModalController,
    public planService: PlanService,
    public fb: FormBuilder,
    public notificationService: NotificationService,
    public planServices: PlanService,
    public alertService: AlertService
  ) {}

  ionViewDidEnter() {
    if (this.sharedService.checkLoginType) {
      this.purchasePlanDetails = this.sharedService.planDetails;
    } else {
      this.getPlanDetails();
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
    this.sharedService.checkLoginType = false;
  }

  public calculateTotalAmount(eve) {
    this.totalAmount =
      Number(eve.target.value) * this.purchasePlanDetails.perunitinrprice -
      Number(
        (eve.target.value *
          this.purchasePlanDetails.perunitinrprice *
          this.purchasePlanDetails.discount) /
          100
      ) +
      Number(
        (eve.target.value *
          this.purchasePlanDetails.perunitinrprice *
          this.purchasePlanDetails.maintenanceper) /
          100
      );
  }

  public async onClickPayment() {
    if (this.totalAmount === 0) {
      return;
    }
    if (this.purchasePlanDetails.planid === 1) {
      if (
        Number(this.addPurchaseDetail.value.buyMH) < 5 ||
        Number(this.addPurchaseDetail.value.buyMH) > 34
      ) {
        this.notificationService.normalShowToast(
          'Please Check the Purchase Limit(5-35 MH) for this Plan',
          false
        );
        return;
      }
    } else if (this.purchasePlanDetails.planid === 2) {
      if (
        Number(this.addPurchaseDetail.value.buyMH) < 35 ||
        Number(this.addPurchaseDetail.value.buyMH) > 299
      ) {
        this.notificationService.normalShowToast(
          'Please Check the Purchase Limit(35-300 MH) for this Plan',
          false
        );
        return;
      }
    } else if (this.purchasePlanDetails.planid === 3) {
      if (Number(this.addPurchaseDetail.value.buyMH) < 300) {
        this.notificationService.normalShowToast(
          'Please Check the Purchase Limit(< 300) for this Plan',
          false
        );
        return;
      }
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
    const data = await this.alertService.presentAlertConfirm(
      'Purchase Plan',
      'Are you sure you want to proceed further !!'
    );
    if (data) {
      this.planService
        .postPayment(purchaseFlowDetails)
        .then((res: ReturnResult<PurchasePlanID[]>) => {
          if (res.success) {
            this.onClickPaymentSummary(res.data[0].inserted);
          }
        });
    }
  }

  public async getPlanDetails() {
    const result: ReturnResult<PlanDetailsModel[]> =
      await this.planServices.getPlanDetails();
    if (result.success) {
      this.purchasePlanDetailsArray = result.data;
    }
  }

  public async onViewPlan() {
    if (!this.purchasePlanDetails) {
      this.notificationService.normalShowToast(
        'Please select any Plan to View',
        false
      );
      return;
    }
    this.sharedService.checkLoginType = true;
    this.addPurchaseDetail.reset();
  }

  public async onClickCancel() {
    this.purchasePlanDetails = null;
    this.sharedService.checkLoginType = false;
    this.getPlanDetails();
  }

  selection(plan: PlanDetailsModel) {
    this.purchasePlanDetailsArray.forEach((x) => {
      if (x.planname !== plan.planname) {
        x.isactive = !x.isactive;
        if (!x.isactive) {
          this.purchasePlanDetails = plan;
        } else {
          this.purchasePlanDetails = null;
        }
      }
    });
  }
}
