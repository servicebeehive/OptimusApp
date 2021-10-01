import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public title = 'Dashboard';

  public isDisabled = true;
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 2,
    speed: 400,
    spaceBetween:10,
  };
  constructor(public accountServices: AccountService) {}

  ngOnInit() {}
}
