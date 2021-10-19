export class WithdrawDetails {
  public withdrawid: number;
  public investorid: number;
  public withdrawunit: number;
  public exchangeaddress: string;
  public withdrawdate: Date;
  public isemailvalidated: boolean;
  public emailotp: number;
  public approvaldate: Date;
  public approvedby: string;
  public approvercomment: string;
  public processdate: Date;
  public processedby: string;
  public processercomment: string;
  public status: string;
  public attribute1: string;
  public attribute2: string;
  public createdon: Date;
  public updatedon: Date;

  constructor() {
    this.withdrawid = 0;
    this.investorid = 0;
    this.withdrawunit = 0;
    this.exchangeaddress = '';
    this.withdrawdate = new Date();
    this.isemailvalidated = false;
    this.emailotp = 0;
    this.approvaldate = new Date();
    this.approvedby = '';
    this.approvercomment = '';
    this.processdate = new Date();
    this.processedby = '';
    this.processercomment = '';
    this.status = '';
    this.attribute1 = '';
    this.attribute2 = '';
    this.createdon = new Date();
    this.updatedon = new Date();
  }
}
