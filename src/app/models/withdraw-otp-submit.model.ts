export class WithDrawSubmitOtpModel {
  public withdrawid: number;
  public emailotp: string;
  public operationtype: string;

  constructor() {
    this.withdrawid = 0;
    this.emailotp = '';
    this.operationtype = '';
  }
}
