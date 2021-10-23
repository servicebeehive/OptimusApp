import { ComponentType } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoinsDetailModel } from 'src/app/models/coins-details.model';
import { AccountService } from 'src/app/services/account/account.service';
import { HomeService } from 'src/app/services/home/home.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';
import { OfferPage } from '../offer/offer.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public title = 'Cryptohashh';
  public headcolor = 'primary';
  public bannerUrl = 'assets/tree-img.png';
  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  public timerSubscription: Subscription;
  public fetchedcoinDetail: CoinsDetailModel[] = [];
  public dollorPrice = 0;

  constructor(
    public homeServices: HomeService,
    public accountServices: AccountService,
    private menu: MenuController,
    public router: Router,
    public modalController: ModalController,
    public sharedService: SharedService
  ) {}
  slideOpts2 = {grabCursor: true,
    autoplay:true,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }

  };
  ngOnInit(): void {}

  ionViewDidEnter() {
    this.dollorPrice = Number(this.sharedService.dollorPrice);
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
  public async openDailog<C>(componentC: ComponentType<C>) {
    const model = await this.modalController.create({
      component: componentC,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }

  async onslide() {
    this.openDailog<OfferPage>(OfferPage);
  }
  public dismiss(): void {
    this.sharedService.showCloseButton = false;
    //this.isShowCloseButton = this.sharedService.showCloseButton;
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
