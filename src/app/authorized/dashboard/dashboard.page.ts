import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
public title:string = "Dashboard";
public slideOpts:string = '';
  constructor(public accountServices:AccountService) { }

  ngOnInit() {
  }

}
