export class LogPurchaseModel {
  public currency: string;
  public amount: number;
  public transactiondate: string;
  public unit: number;

  constructor() {
    this.currency = '';
    this.amount = 0;
    this.transactiondate = '';
    this.unit = 0;
  }
}
