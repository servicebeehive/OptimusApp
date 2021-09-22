import { Component, OnInit } from '@angular/core';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
import { SharedService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-purchase-offer',
  templateUrl: './purchase-offer.page.html',
  styleUrls: ['./purchase-offer.page.scss'],
})
export class PurchaseOfferPage implements OnInit {
  public title = 'Plans & Offer';
  public headcolor = 'primary';
  constructor(public sharedService: SharedService) {}

  ngOnInit() {}

  public onClickPurchasePlan(
    discount: number,
    contract: number,
    type: string
  ): void {
    const planDetails = new PlanDetailsModel();
    planDetails.contract = contract;
    planDetails.discount = discount;
    planDetails.type = type;
    this.sharedService.setPlanDetails(planDetails);
    this.sharedService.setCheckLoginType(true);
  }
}
