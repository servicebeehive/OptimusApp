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
  constructor(public router: Router,
    public accountServices: AccountService) { }

  ngOnInit() { }

  public onClicklogin(): void {
    this.router.navigate(['login']);
  }

}
