import { Injectable } from '@angular/core';
import { userDetail } from 'src/app/models/userdetail.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private ACCESS_TOKEN?: userDetail | null;

  constructor() { }

  public get accessToken(): string | null {
    if (this.ACCESS_TOKEN != null) {
      return this.ACCESS_TOKEN.usertoken;
    } else {
      const local_access_token = localStorage.getItem('access-token');
      if (local_access_token != null) {
        return local_access_token;
      }
      return null;
    }
  }

  public setAccessToken(userDetail:userDetail) {
    console.log('userDetail',userDetail)
    if (userDetail.usertoken == null) {
      localStorage.removeItem('access-token');
      return;
    }
    else{
      localStorage.setItem('access-token', userDetail.usertoken);
    }
  }

  isLoggedIn(): boolean {
    return this.accessToken != null;
  }
}
