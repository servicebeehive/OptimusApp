import { Injectable } from '@angular/core';
import { DashboardMegaHashDetailModel } from 'src/app/models/dashboard-megahash-detail.model';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public planDetails: PlanDetailsModel = new PlanDetailsModel();
  public checkLoginType = false;
  public showCloseButton = false;
  public userRefer = '';
  public dollorPrice = 0;
  public perUnitPriceForCalculator = 0;
  public dashboardMegaHashDetails: DashboardMegaHashDetailModel[] = [];
  public withDrawLimit = 0;

  constructor() {}

  public setPlanDetails(planDetails: PlanDetailsModel): void {
    this.planDetails = new PlanDetailsModel();
    this.planDetails = planDetails;
  }

  public setCheckLoginType(loginType: boolean): void {
    this.checkLoginType = loginType;
  }
}
