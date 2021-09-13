import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { NetworkDetailModel } from 'src/app/models/network.model';
import { ReturnResult } from 'src/app/models/return-result';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService extends BaseService {

  constructor(public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>) {
    super(httpClient, config.getSettingsObject().APIUrl);
  }

  public async getNetworkData(): Promise<ReturnResult<NetworkDetailModel[]>> {
    return this.Post<ReturnResult<NetworkDetailModel[]>>(this.controllers.getnetworkdata)
  }
}
