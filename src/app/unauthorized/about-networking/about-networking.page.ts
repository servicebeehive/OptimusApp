import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-networking',
  templateUrl: './about-networking.page.html',
  styleUrls: ['./about-networking.page.scss'],
})
export class AboutNetworkingPage implements OnInit {
  public title : string ='About Referral'
  public headcolor: string ='primary'
  constructor() { }

  ngOnInit() {
  }

}
