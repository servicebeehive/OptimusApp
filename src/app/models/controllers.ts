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
}
