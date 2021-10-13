import { Injectable } from '@angular/core';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public planDetails: PlanDetailsModel = new PlanDetailsModel();
  public checkLoginType = false;
  public showCloseButton = false;
  public userRefer = '';
  public deepLink = '';

  constructor() {}

  public setPlanDetails(planDetails: PlanDetailsModel): void {
    this.planDetails = new PlanDetailsModel();
    this.planDetails = planDetails;
  }

  public setCheckLoginType(loginType: boolean): void {
    this.checkLoginType = loginType;
  }
}
