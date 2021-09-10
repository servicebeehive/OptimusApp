import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {

  constructor(public router: Router,
    public accountService: AccountService) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  public logOut(){
=======
  public onClickLogout(): void {
    this.accountService.removeToken();
>>>>>>> 184a5a34b2d641f1ce207512fe9fdf525b8e40d5
    this.router.navigate(['unauthorized/home']);
  }

}
