import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DashboardMegaHashDetailModel } from 'src/app/models/dashboard-megahash-detail.model';
import { LogCoinsModel } from 'src/app/models/log-coins.mode';
import { LogNetworkDetailsModel } from 'src/app/models/log-network.model';
import { LogPurchaseModel } from 'src/app/models/log-purchase.model';
import { LogWithDrawModel } from 'src/app/models/log-withdraw.model';
import { ReturnResult } from 'src/app/models/return-result';
import { AccountService } from 'src/app/services/account/account.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';
import { AboutNetworkingPage } from 'src/app/unauthorized/about-networking/about-networking.page';
import { KnowMiningPage } from 'src/app/unauthorized/know-mining/know-mining.page';
import { PurchaseOfferPage } from 'src/app/unauthorized/purchase-offer/purchase-offer.page';
import { WhyOptimusPage } from 'src/app/unauthorized/why-optimus/why-optimus.page';
import { SupportPage } from '../support/support.page';

export class DashboardDetails {
  operationtype: string;
  constructor() {
    this.operationtype = '';
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public title = 'Dashboard';
  public dashboardMegaHashDetails: DashboardMegaHashDetailModel[] = [];
  public logNetworkDetails: LogNetworkDetailsModel[] = [];
  public logWithdrawDetails: LogWithDrawModel[] = [];
  public logPurchaseDetails: LogPurchaseModel[] = [];
  public logCoinsDetails: LogCoinsModel[] = [];
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
    public sharedService: SharedService,
    public dashboardService: DashboardService
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
    } else if (item === 'support') {
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

  async ionViewDidEnter() {
    await this.getMegaHashDetailForUser();
    await this.getLogNetworkDetail();
    await this.getLogPurchaseDetail();
    await this.getLogWithdrawDetail();
    await this.getLogCoinDetail();
  }

  public async getMegaHashDetailForUser() {
    const dashboardDetails = new DashboardDetails();
    dashboardDetails.operationtype = 'MHR';
    const value: ReturnResult<DashboardMegaHashDetailModel[]> =
      await this.dashboardService.getMegaHashDetail(dashboardDetails);
    if (value.success) {
      this.dashboardMegaHashDetails = value.data;
    }
  }

  public async getLogNetworkDetail() {
    const dashboardDetails = new DashboardDetails();
    dashboardDetails.operationtype = 'LOGNET';
    const value: ReturnResult<LogNetworkDetailsModel[]> =
      await this.dashboardService.getLogNetworkDetail(dashboardDetails);
    if (value.success) {
      this.logNetworkDetails = value.data;
    }
  }

  public async getLogPurchaseDetail() {
    const dashboardDetails = new DashboardDetails();
    dashboardDetails.operationtype = 'LOGPUR';
    const value: ReturnResult<LogPurchaseModel[]> =
      await this.dashboardService.getLogPurchaseDetail(dashboardDetails);
    if (value.success) {
      this.logPurchaseDetails = value.data;
    }
  }

  public async getLogWithdrawDetail() {
    const dashboardDetails = new DashboardDetails();
    dashboardDetails.operationtype = 'LOGWIT';
    const value: ReturnResult<LogWithDrawModel[]> =
      await this.dashboardService.getLogWithdrawDetail(dashboardDetails);
    if (value.success) {
      this.logWithdrawDetails = value.data;
    }
  }

  public async getLogCoinDetail() {
    const dashboardDetails = new DashboardDetails();
    dashboardDetails.operationtype = 'LOGCON';
    const value: ReturnResult<LogCoinsModel[]> =
      await this.dashboardService.getLogCoinDetail(dashboardDetails);
    if (value.success) {
      this.logCoinsDetails = value.data;
    }
  }
}
