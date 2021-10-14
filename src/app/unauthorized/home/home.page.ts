import { ComponentType } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoinsDetailModel } from 'src/app/models/coins-details.model';
import { AccountService } from 'src/app/services/account/account.service';
import { HomeService } from 'src/app/services/home/home.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public title = 'Cryptohashh';
  public headcolor = 'primary';
  public bannerUrl = 'https://cryptohashh.com/images/tree-img.png';
  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  public timerSubscription: Subscription;
  public fetchedcoinDetail: CoinsDetailModel[] = [];

  constructor(
    public homeServices: HomeService,
    public accountServices: AccountService,
    private menu: MenuController
  ) {}

  ngOnInit(): void {}

  ionViewDidEnter() {
    this.getListItem();
    this.timerSubscription = timer(0, 7000)
      .pipe(
        map(() => {
          this.getListItem();
        })
      )
      .subscribe();
    this.menu.enable(false);
  }

  public getListItem(): void {
    this.homeServices.getCoinsList().then((result) => {
      this.fetchedcoinDetail = result;
    });
  }

  ionViewDidLeave(): void {
    this.timerSubscription.unsubscribe();
  }
}
