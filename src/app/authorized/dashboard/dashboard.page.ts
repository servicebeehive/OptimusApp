import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public accountServices: AccountService, public router:Router) {}

  ngOnInit() {}

  onslide(item){
    if(item=='purchase-offer'){
      this.router.navigate(['unauthorized/purchase-offer'])
    }
    if(item=='know-mining'){
      this.router.navigate(['unauthorized/know-mining'])
    }
    if(item=='why-optimus'){
      this.router.navigate(['unauthorized/why-optimus'])
    }
    if(item=='about-networking'){
      this.router.navigate(['unauthorized/about-networking'])
    }
    

  }
  
}
