import { Injectable } from '@angular/core';

@Injectable()
export class Controllers {
  public readonly login = `/api/v1/login`;
  public readonly signUpUser = `/api/v1/signupuser`;
  public readonly verifyuserotp = `/api/v1/verifyuserotp`;
  public readonly getnetworkdata = `/api/v1/getnetworkdata`;
  public readonly homeApiCoinsURl = `/api/v1/getCoinsDetails`;
  public readonly getplandetails = `/api/v1/getplandetails`;
  public readonly getpaymethods = `/api/v1/getpaymethod`;
  public readonly payment = `/api/v1/payment`;
  public readonly getcalulcatedcoindetails = `/api/v1/getcalulcatedcoindetails`;
  public readonly purchaseOperation = `/api/v1/purchaseoperation`;
  public readonly getwithdraw = `/api/v1/getwithdraw`;
  public readonly withdrawverify = `/api/v1/withdrawverify`;
  public readonly getdashboarddata = `/api/v1/getdashboarddata`;
  public readonly resetoperation = `/api/v1/resetoperation`;
  public readonly getuserbankinfo = `/api/v1/getuserbankinfo`;
}
