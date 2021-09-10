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

  public onClickLogout(): void {
    this.accountService.removeToken();
    this.router.navigate(['unauthorized/home']);
  }

}
