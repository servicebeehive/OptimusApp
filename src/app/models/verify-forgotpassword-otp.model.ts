export class VerifyForgotPasswordOtpModel {
  public emailaddress: string;
  public otp: number;
  public operationtype: string;
  public newpassword: string;

  constructor() {
    this.emailaddress = '';
    this.otp = 0;
    this.operationtype = '';
    this.newpassword = '';
  }
}
