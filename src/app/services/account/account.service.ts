import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { userDetail } from 'src/app/models/userdetail.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public ACCESS_TOKEN?: string;
  public EMAIL_ID?: string;

  constructor(public storage: Storage) {
    this.storage.create();
  }

  public accessToken(): Promise<string> | null {
    return new Promise((resolve, reject) => {
      this.storage.get('access-token').then((res: string) => {
        this.ACCESS_TOKEN = res;
        resolve(this.ACCESS_TOKEN)
      })
    })

  }

  public setAccessToken(userDetail: userDetail) {
    this.ACCESS_TOKEN = userDetail.usertoken;
    if (userDetail.usertoken == null) {
      this.storage.remove('access-token');
      return;
    }
    else {
      this.storage.set('access-token', userDetail.usertoken);
      this.EMAIL_ID = userDetail.emailid
    }
  }

  public isLoggedIn(): boolean {
    this.accessToken().then(response => {
      this.ACCESS_TOKEN = response;
    })
    return this.ACCESS_TOKEN != null;
  }

  public getToken(): string {
    this.accessToken().then(response => {
      this.ACCESS_TOKEN = response;
    })
    return this.ACCESS_TOKEN ;
  }

  public getEmail():string{
    return this.EMAIL_ID;
  }

  public removeToken(): void {
    this.ACCESS_TOKEN = null;
    this.EMAIL_ID = null;
    this.storage.remove('access-token');
  }
}
