import { Component, OnInit } from '@angular/core';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
import { ReturnResult } from 'src/app/models/return-result';
import { PlanService } from 'src/app/services/plan/plan.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-purchase-offer',
  templateUrl: './purchase-offer.page.html',
  styleUrls: ['./purchase-offer.page.scss'],
})
export class PurchaseOfferPage implements OnInit {
  public title = 'Plans & Offer';
  public headcolor = 'primary';
  public planDetailsData: PlanDetailsModel[] = [];
  constructor(
    public sharedService: SharedService,
    public planServices: PlanService
  ) {}

  ngOnInit() {
    this.getPlanDetails();
  }

  public onClickPurchasePlan(selectedPalnDetails: PlanDetailsModel): void {
    const planDetails = new PlanDetailsModel();
    this.sharedService.setPlanDetails(selectedPalnDetails);
    this.sharedService.setCheckLoginType(true);
  }

  public async getPlanDetails() {
    const result: ReturnResult<PlanDetailsModel[]> =
      await this.planServices.getPlanDetails();
    if (result.success) {
      this.planDetailsData = result.data;
    }
  }
}
