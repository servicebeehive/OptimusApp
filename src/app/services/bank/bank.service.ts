import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankInfoDetails } from 'src/app/models/bank-info.model';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { ReturnResult } from 'src/app/models/return-result';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class BankService extends BaseService {
  constructor(
    public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>
  ) {
    super(httpClient, config.getSettingsObject().APIUrl);
  }

  public async postBankInfo(
    bankInfoDetailsData: BankInfoDetails
  ): Promise<ReturnResult> {
    return this.PostReturn<BankInfoDetails, ReturnResult>(
      this.controllers.getuserbankinfo,
      bankInfoDetailsData
    );
  }
}
