export class PaymentDetails {
  public id: number;
  public value: string;
  public percentage: number;
  public isactive: string;
  public createdon: Date;
  public updatedon: Date;

  constructor() {
    this.id = 0;
    this.value = '';
    this.percentage = 0;
    this.isactive = '';
    this.createdon = new Date();
    this.updatedon = new Date();
  }
}
