import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-about-networking',
  templateUrl: './about-networking.page.html',
  styleUrls: ['./about-networking.page.scss'],
})
export class AboutNetworkingPage implements OnInit {
  public title = 'About Referral';
  public headcolor = 'primary';
  constructor(public alertService: AlertService) {}

  ngOnInit() {}

  async testAlert() {
    const data = await this.alertService.presentAlertConfirm(
      'TestHeader',
      'TestMessage'
    );
    console.log('data', data);
  }
}
