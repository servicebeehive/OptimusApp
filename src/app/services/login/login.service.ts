import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { loginDetail } from 'src/app/models/login.model';
import { OtpDetail } from 'src/app/models/otp.model';
import { RegistrationDetail } from 'src/app/models/registration.model';
import { ReturnResult } from 'src/app/models/return-result';
import { userDetail } from 'src/app/models/userdetail.model';
import { VerifyOtpModel } from 'src/app/models/verify-otp.model';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>) {
    super(httpClient, config.getSettingsObject().APIUrl);
  }

  public async getUserDetails(loginDetailData: loginDetail): Promise<ReturnResult<userDetail>> {
    return this.PostReturn<loginDetail, ReturnResult<userDetail>>(this.controllers.login, loginDetailData)
  }

  public async postRegistrationDetail(RegistrationDetailData: RegistrationDetail): Promise<ReturnResult<OtpDetail>> {
    return this.PostReturn<RegistrationDetail, ReturnResult<OtpDetail>>(this.controllers.signUpUser, RegistrationDetailData)
  }

  public async verifyOtpDetail(VerifyOtpDetailData: VerifyOtpModel): Promise<ReturnResult> {
    return this.PostReturn<VerifyOtpModel, ReturnResult>(this.controllers.verifyuserotp, VerifyOtpDetailData)
  }


}
