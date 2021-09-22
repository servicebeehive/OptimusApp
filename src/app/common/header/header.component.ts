import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle = '';
  @Input() headcolor = '';
  public islogeedIn?: boolean = false;
  constructor(
    public router: Router,
    public accountServices: AccountService,
    public sharedService: SharedService
  ) {
    this.islogeedIn = this.accountServices.isLoggedIn();
  }

  ngOnInit() {}

  public onClicklogin(): void {
    this.router.navigate(['login']);
    this.sharedService.setCheckLoginType(false);
  }
  public onClickLogout(): void {
    this.sharedService.setCheckLoginType(false);
    this.accountServices.removeToken();
    this.router.navigate(['unauthorized/home']);
  }
}
