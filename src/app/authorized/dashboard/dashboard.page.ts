import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account/account.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';
import { AboutNetworkingPage } from 'src/app/unauthorized/about-networking/about-networking.page';
import { KnowMiningPage } from 'src/app/unauthorized/know-mining/know-mining.page';
import { PurchaseOfferPage } from 'src/app/unauthorized/purchase-offer/purchase-offer.page';
import { WhyOptimusPage } from 'src/app/unauthorized/why-optimus/why-optimus.page';
import { SupportPage } from '../support/support.page';

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
    spaceBetween: 10,
  };
  constructor(
    public accountServices: AccountService,
    public router: Router,
    public modalController: ModalController,
    public sharedService: SharedService
  ) {}

  ngOnInit() {}

  async onslide(item) {
    if (item === 'purchase-offer') {
      this.openDailog<PurchaseOfferPage>(PurchaseOfferPage);
    } else if (item === 'know-mining') {
      this.openDailog<KnowMiningPage>(KnowMiningPage);
    } else if (item === 'why-optimus') {
      this.openDailog<WhyOptimusPage>(WhyOptimusPage);
    } else if (item === 'about-networking') {
      this.openDailog<AboutNetworkingPage>(AboutNetworkingPage);
    }
      else if (item === 'support') {
        this.openDailog<SupportPage>(SupportPage);
    }
    
    
  }

  public async openDailog<C>(componentC: ComponentType<C>) {
    this.sharedService.showCloseButton = true;
    const model = await this.modalController.create({
      component: componentC,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }
}
