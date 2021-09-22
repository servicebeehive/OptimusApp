import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public title = 'Dashboard';
  public slideOpts = '';
  public isDisabled = true;

  constructor(public accountServices: AccountService) {}

  ngOnInit() {}
}
