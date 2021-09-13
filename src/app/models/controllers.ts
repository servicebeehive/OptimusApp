import { Injectable } from '@angular/core';

@Injectable()
export class Controllers {

    public readonly login = `/api/v1/login`;
    public readonly signUpUser = `/api/v1/signupuser`;
    public readonly verifyuserotp = `/api/v1/verifyuserotp`;
    public readonly getnetworkdata = `/api/v1/getnetworkdata`;
}