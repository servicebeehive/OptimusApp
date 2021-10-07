import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardDetails } from 'src/app/authorized/dashboard/dashboard.page';
import { Controllers } from 'src/app/models/controllers';
import { DashboardMegaHashDetailModel } from 'src/app/models/dashboard-megahash-detail.model';
import { IConfig } from 'src/app/models/iconfig';
import { LogCoinsModel } from 'src/app/models/log-coins.mode';
import { LogNetworkDetailsModel } from 'src/app/models/log-network.model';
import { LogPurchaseModel } from 'src/app/models/log-purchase.model';
import { LogWithDrawModel } from 'src/app/models/log-withdraw.model';
import { ReturnResult } from 'src/app/models/return-result';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends BaseService {
  constructor(
    public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>
  ) {
    super(httpClient, config.getSettingsObject().APIUrl);
  }

  public async getMegaHashDetail(
    value: DashboardDetails
  ): Promise<ReturnResult<DashboardMegaHashDetailModel[]>> {
    return this.PostReturn<
      DashboardDetails,
      ReturnResult<DashboardMegaHashDetailModel[]>
    >(this.controllers.getdashboarddata, value);
  }

  public async getLogNetworkDetail(
    value: DashboardDetails
  ): Promise<ReturnResult<LogNetworkDetailsModel[]>> {
    return this.PostReturn<
      DashboardDetails,
      ReturnResult<LogNetworkDetailsModel[]>
    >(this.controllers.getdashboarddata, value);
  }

  public async getLogPurchaseDetail(
    value: DashboardDetails
  ): Promise<ReturnResult<LogPurchaseModel[]>> {
    return this.PostReturn<DashboardDetails, ReturnResult<LogPurchaseModel[]>>(
      this.controllers.getdashboarddata,
      value
    );
  }

  public async getLogWithdrawDetail(
    value: DashboardDetails
  ): Promise<ReturnResult<LogWithDrawModel[]>> {
    return this.PostReturn<DashboardDetails, ReturnResult<LogWithDrawModel[]>>(
      this.controllers.getdashboarddata,
      value
    );
  }

  public async getLogCoinDetail(
    value: DashboardDetails
  ): Promise<ReturnResult<LogCoinsModel[]>> {
    return this.PostReturn<DashboardDetails, ReturnResult<LogCoinsModel[]>>(
      this.controllers.getdashboarddata,
      value
    );
  }
}
