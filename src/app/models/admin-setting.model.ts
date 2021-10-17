export class AdminSettingData {
  public id: number;
  public currencycode: string;
  public usdratebyexch: number;
  public usdratebyadmin: number;
  public isusdratebyadminactive: boolean;
  public infrapercentage: number;
  public withdrawthreshlimit: number;
  public isactive: boolean;
  public attribute1: string;
  public attribute2: string;
  public createdon: Date;
  public updatedon: Date;
  public totalunit: number;
  public totalunitsold: number;
  constructor() {
    this.id = 0;
    this.currencycode = '';
    this.usdratebyexch = 0;
    this.usdratebyadmin = 0;
    this.isusdratebyadminactive = false;
    this.infrapercentage = 0;
    this.withdrawthreshlimit = 0;
    this.isactive = false;
    this.attribute1 = '';
    this.attribute2 = '';
    this.createdon = new Date();
    this.updatedon = new Date();
    this.totalunit = 0;
    this.totalunitsold = 0;
  }
}
