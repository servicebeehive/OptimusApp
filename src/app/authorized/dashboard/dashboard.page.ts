import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
public title:string = "Dashboard";
public slideOpts:string = '';
  constructor() { }

  ngOnInit() {
  }

}
