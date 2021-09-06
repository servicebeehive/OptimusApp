import { Component, OnInit } from '@angular/core';
import { loginDetail } from 'src/app/models/login.model';
import { ReturnResult } from 'src/app/models/return-result';
import { HomeService } from 'src/app/services/home/home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public title : string ='Welcome to'
  public headcolor : string ="primary"

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  }
  
  constructor(public homeServices:HomeService) {}

  ngOnInit(): void {
    this.getListItem()
  }

  public getListItem() {
    this.homeServices.getListItem().then((res: ReturnResult<loginDetail[]>) => {
      const returnResult = res
      if (returnResult.success) {
      } 
    })
  }

}
