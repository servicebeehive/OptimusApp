import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public planDetails: PlanDetailsModel = new PlanDetailsModel();
  public checkLoginType = false;
  public showCloseButton = false;

  constructor() {}

  public setPlanDetails(planDetails: PlanDetailsModel): void {
    this.planDetails = planDetails;
  }

  public setCheckLoginType(loginType: boolean): void {
    this.checkLoginType = loginType;
  }
}
