import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PlanDetailsModel } from 'src/app/models/plan-details.model';
import { ReturnResult } from 'src/app/models/return-result';
import { PlanService } from 'src/app/services/plan/plan.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';
import { ImgpopupPage } from '../imgpopup/imgpopup.page';

@Component({
  selector: 'app-purchase-offer',
  templateUrl: './purchase-offer.page.html',
  styleUrls: ['./purchase-offer.page.scss'],
})
export class PurchaseOfferPage implements OnInit {
  public title = 'Plans & Offer';
  public headcolor = 'primary';
  public planDetailsData: PlanDetailsModel[] = [];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    //speed: 400,
    spaceBetween: 10,
  };
  showitem: any = true;
  outofStok = false;
  

  constructor(
    public sharedService: SharedService,
    public planServices: PlanService,
    public modalController: ModalController,
    public router: Router
  ) {}

  ngOnInit() {
    this.getPlanDetails();
  }

  public onClickPurchasePlan(selectedPalnDetails: PlanDetailsModel): void {
    const planDetails = new PlanDetailsModel();
    this.sharedService.setPlanDetails(selectedPalnDetails);
    this.sharedService.setCheckLoginType(true);
    if (this.sharedService.showCloseButton) {
      this.dismiss();
      this.router.navigate(['authorized/purchase-flow']);
    }
  }

  public async getPlanDetails() {
    const result: ReturnResult<PlanDetailsModel[]> =
      await this.planServices.getPlanDetails();
    if (result.success) {
      this.planDetailsData = result.data;
    }
  }

  public async openDailog<C>(componentC: ComponentType<C>) {
    const model = await this.modalController.create({
      component: componentC,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }
  async onslide() {
    this.openDailog<ImgpopupPage>(ImgpopupPage);
  }

  public dismiss(): void {
    this.sharedService.showCloseButton = false;
    //this.isShowCloseButton = this.sharedService.showCloseButton;
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async swipeEvent(event) {
    const index: number = await event.target.getActiveIndex();

    if (index === 0) {
      this.showitem = true;
      this.outofStok=false
    } else if (index === 1 || index === 3 || index === 4 || index === 5) {
      this.showitem = false;
      this.outofStok = true;
    }
  }
}
