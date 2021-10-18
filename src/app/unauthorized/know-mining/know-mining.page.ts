import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-mining',
  templateUrl: './know-mining.page.html',
  styleUrls: ['./know-mining.page.scss'],
})
export class KnowMiningPage implements OnInit {
  public title : string ='Know Mining'
  public headcolor: string ='primary'
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
   
    autoplay:true,

  };
  constructor() { }

  ngOnInit() {
  }

}
