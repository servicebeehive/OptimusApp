export class PlanDetailsModel {
  public discount?: number;
  public contract?: number;
  public type?: string;

  constructor() {
    this.discount = 0;
    this.contract = 0;
    this.type = '';
  }
}
