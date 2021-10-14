export class VerifyForgotPasswordOtpModel {
  public emailaddress: string;
  public otp: string;
  public operationtype: string;
  public newpassword: string;

  constructor() {
    this.emailaddress = '';
    this.otp = '';
    this.operationtype = '';
    this.newpassword = '';
  }
}
