import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService {

  constructor(public httpClient: HttpClient, 
              public controllers: Controllers,
              public config:ConfigService<IConfig>) {
                super(httpClient,config.getSettingsObject().APIUrl);
               }

  public getCoinsList(): Promise<any> {
    return this.Get<any>(this.controllers.homeApiCoinsURl)
  }

}
