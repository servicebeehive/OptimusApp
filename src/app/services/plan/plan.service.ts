import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { PaymentDetails } from 'src/app/models/payment-details.mode';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
import { ReturnResult } from 'src/app/models/return-result';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class PlanService extends BaseService {
  constructor(
    public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>
  ) {
    super(httpClient, config.getSettingsObject().APIUrl);
  }

  public async getPlanDetails(): Promise<ReturnResult<PlanDetailsModel[]>> {
    return this.Get<ReturnResult<PlanDetailsModel[]>>(
      this.controllers.getplandetails
    );
  }

  public async getPayMethodDetails(): Promise<ReturnResult<PaymentDetails[]>> {
    return this.Post<ReturnResult<PaymentDetails[]>>(
      this.controllers.getpaymethods
    );
  }
}
