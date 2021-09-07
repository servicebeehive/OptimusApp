import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { userDetail } from 'src/app/models/userdetail.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private ACCESS_TOKEN?: userDetail | null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  public async accessToken() {
    const local_access_token = await this.storage.get('access-token');
    console.log('Got value', local_access_token);
    if (local_access_token != null) {
      return local_access_token;
    }
    return null;
  }

  public async setAccessToken(userDetail: userDetail) {
    if (userDetail.usertoken == null) {
      await this.storage.remove('access-token');
      return;
    }
    else {
      await this.storage.set('access-token', userDetail.usertoken);
    }
  }

  public isLoggedIn(): boolean {
    return this.accessToken != null;
  }

  public async removeToken(): Promise<void> {
    await this.storage.remove('access-token');
  }
}
