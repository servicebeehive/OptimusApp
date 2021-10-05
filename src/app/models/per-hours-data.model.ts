import { MHDetailsModel } from './mh-details.model';

export class PerHoursDataModel {
  public minute: MHDetailsModel;
  public hour: MHDetailsModel;
  public day: MHDetailsModel;
  public week: MHDetailsModel;
  public month: MHDetailsModel;

  constructor() {
    this.minute = new MHDetailsModel();
    this.hour = new MHDetailsModel();
    this.day = new MHDetailsModel();
    this.week = new MHDetailsModel();
    this.month = new MHDetailsModel();
  }
}
