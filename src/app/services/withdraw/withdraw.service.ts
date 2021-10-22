import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { ReturnResult } from 'src/app/models/return-result';
import { WithdrawDetails } from 'src/app/models/withdraw-details.mode';
import { GetWithdrawDetails } from 'src/app/models/withdraw-get-details.mode';
import { WithDrawGetOtpModel } from 'src/app/models/withdraw-get-otp.model';
import { WithDrawSubmitOtpModel } from 'src/app/models/withdraw-otp-submit.model';
import { WithDrawOtpModel } from 'src/app/models/wthdraw-otp.model';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class WithdrawService extends BaseService {
  constructor(
    public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>
  ) {
    super(httpClient, config.getSettingsObject().APIUrl);
  }

  public async getWithdrawOtp(
    value: WithDrawGetOtpModel
  ): Promise<ReturnResult<WithDrawOtpModel>> {
    return this.PostReturn<WithDrawGetOtpModel, ReturnResult<WithDrawOtpModel>>(
      this.controllers.getwithdraw,
      value
    );
  }

  public async postWithdrawOtp(
    value: WithDrawSubmitOtpModel
  ): Promise<ReturnResult> {
    return this.PostReturn<WithDrawSubmitOtpModel, ReturnResult>(
      this.controllers.withdrawverify,
      value
    );
  }

  public async getWithdrawDetails(
    value: GetWithdrawDetails
  ): Promise<ReturnResult<WithdrawDetails[]>> {
    return this.PostReturn<GetWithdrawDetails, ReturnResult<WithdrawDetails[]>>(
      this.controllers.getwithdrwoperation,
      value
    );
  }
}
