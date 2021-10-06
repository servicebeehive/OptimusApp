export class PurchaseFlowDetails {
  planid: number;
  unit: number;
  price: number;
  discount: number;
  maintenancecharge: number;
  gatewaycharge: number;
  totalamount: number;
  operationtype: string;
  constructor() {
    this.planid = 0;
    this.unit = 0;
    this.price = 0;
    this.discount = 0;
    this.maintenancecharge = 0;
    this.gatewaycharge = 0;
    this.totalamount = 0;
    this.operationtype = '';
  }
}
