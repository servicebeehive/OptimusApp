import { PerHoursDataModel } from './per-hours-data.model';

export class CalulatedCoinsDetailModel {
  public status: boolean;
  public data: PerHoursDataModel;
}

export class CalulatedAmount {
  public price: string;
}

export class CalulatedMH {
  public calculatedvalue: number;
}
