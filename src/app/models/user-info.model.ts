export class UserInfoDetails {
  public investorid: number;
  public loginid: number;
  public fname: string;
  public lname: string;
  public emailid: string;
  public mobileno: string;
  public address1: string;
  public address2: string;
  public city: string;
  public state: string;
  public country: string;
  public countrycode: string;
  public totalmh: number;
  public ethtotalmined: number;
  public attribute1: string;
  public attribute2: string;
  public createdon: Date;
  public updatedon: Date;
  public pincode: number;
  public incamounttobepaid: number;
  public bankaccountnumber: number;
  public beneficiaryname: string;
  public ifccode: string;
  public bankname: string;
  public totalincunit: number;
  public totalincamount: number;

  constructor() {
    this.investorid = 0;
    this.loginid = 0;
    this.fname = '';
    this.lname = '';
    this.emailid = '';
    this.mobileno = '';
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.country = '';
    this.countrycode = '';
    this.totalmh = 0;
    this.ethtotalmined = 0;
    this.attribute1 = '';
    this.attribute2 = '';
    this.createdon = new Date();
    this.updatedon = new Date();
    this.pincode = 0;
    this.incamounttobepaid = 0;
    this.bankaccountnumber = 0;
    this.beneficiaryname = '';
    this.ifccode = '';
    this.bankname = '';
    this.totalincunit = 0;
    this.totalincamount = 0;
  }
}
