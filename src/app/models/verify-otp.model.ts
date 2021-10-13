export class VerifyOtpModel {
  public emailaddress: string;
  public emailotp: number;
  public operationtype: string;
  public tokenval: string;
  public newpassword: string;

  constructor() {
    this.emailaddress = '';
    this.emailotp = 0;
    this.operationtype = '';
    this.tokenval = '';
    this.newpassword = '';
  }
}
