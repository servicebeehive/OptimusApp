import { Component, OnInit } from '@angular/core';
import { loginDetail } from 'src/app/models/login.model';
import { ReturnResult } from 'src/app/models/return-result';
import { AccountService } from 'src/app/services/account/account.service';
import { HomeService } from 'src/app/services/home/home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public title : string ='Cryptohashh'
  public headcolor : string ="primary"
public bannerUrl="https://cryptohashh.com/images/home-banner.jpg"
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  }
  
  constructor(public homeServices:HomeService,
              public accountServices:AccountService) {}

  ngOnInit(): void {
    //this.getListItem()
  }

  public getListItem() {
    this.homeServices.getListItem();
  }



}
