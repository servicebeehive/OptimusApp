import { Injectable } from '@angular/core';
import { IConfig } from 'src/app/models/iconfig';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public config:ConfigService<IConfig>) { }

  public getListItem(){
    console.log('APIurl Test',this.config.getSettingsObject().APIUrl);
    console.log('BaseRefUrl Test',this.config.getSettingsObject().BaseRefUrl)
  }
}
