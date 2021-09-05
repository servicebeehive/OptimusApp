import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title='Welcome to'
  headcolor="primary"
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
 
  }
  
  constructor(public homeServices:HomeService) {}

  ngOnInit(): void {
    this.homeServices.getListItem()
  }

}
