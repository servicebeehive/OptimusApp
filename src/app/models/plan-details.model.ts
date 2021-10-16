export class PlanDetailsModel {
  planid?: number;
  planname?: string;
  plantag?: string;
  currencycode?: string;
  contract?: number;
  minimumunit?: number;
  maxunit?: number;
  perunitinrprice?: number;
  isstockavailable?: boolean;
  maintenanceper?: number;
  discount?: number;
  payout?: string;
  projectedpayout?: string;
  disseqorder?: number;
  comment?: string;
  isactive?: boolean;
  createdon?: Date;
  createdby?: string;
  updatedon?: Date;
  discountedprice?: number;
  totalprice?: number;

  constructor() {
    this.planid = 0;
    this.planname = '';
    this.plantag = '';
    this.currencycode = '';
    this.contract = 0;
    this.minimumunit = 0;
    this.maxunit = 0;
    this.perunitinrprice = 0;
    this.isstockavailable = false;
    this.maintenanceper = 0;
    this.discount = 0;
    this.payout = '';
    this.projectedpayout = '';
    this.disseqorder = 0;
    this.comment = '';
    this.isactive = false;
    this.createdon = new Date();
    this.createdby = '';
    this.updatedon = new Date();
    this.discountedprice = 0;
    this.totalprice = 0;
  }
}
