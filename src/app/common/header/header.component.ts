import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string = ''
  @Input() headcolor: string = ''
  public islogeedIn?: boolean = false
  constructor(public router: Router,
    public accountServices: AccountService) { 
      this.islogeedIn = this.accountServices.isLoggedIn();
      console.log('this.islogeedIn',this.islogeedIn)
    }

  ngOnInit() { }

  public onClicklogin(): void {
    this.router.navigate(['login']);
  }

  public onClickLogout(): void {
    this.accountServices.removeToken();
    this.router.navigate(['unauthorized/home']);
  }

}
