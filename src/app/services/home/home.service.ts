import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { loginDetail } from 'src/app/models/login.model';
import { ReturnResult } from 'src/app/models/return-result';
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

  public getListItem(): Promise<ReturnResult<loginDetail[]>> {
    return this.Get<ReturnResult<loginDetail[]>>(this.controllers.login)
  }

}
