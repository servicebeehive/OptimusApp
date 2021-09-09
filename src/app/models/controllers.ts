import { Injectable } from '@angular/core';

@Injectable()
export class Controllers {

    public readonly login = `/api/v1/login`;
    public readonly signUpUser = `/api/v1/signupuser`;
}