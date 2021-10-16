import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account/account.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';
import { CalculatorPage } from 'src/app/unauthorized/calculator/calculator.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle = '';
  @Input() headcolor = '';
  public islogeedIn?: boolean = false;
  public isShowCloseButton?: boolean = false;
  constructor(
    public router: Router,
    public accountServices: AccountService,
    public sharedService: SharedService,
    public modalController: ModalController, public menu:MenuController
  ) {
    this.islogeedIn = this.accountServices.isLoggedIn();
    this.isShowCloseButton = this.sharedService.showCloseButton;
  }

  ngOnInit() {}

  public onClicklogin(): void {
    this.router.navigate(['login']);
    this.sharedService.setCheckLoginType(false);
  }
  public onClickLogout(): void {
    this.sharedService.setCheckLoginType(false);
    this.accountServices.removeToken();
    this.router.navigate(['unauthorized/home']);
  }

  public async oncalculator() {
    const model = await this.modalController.create({
      component: CalculatorPage,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }

  public dismiss(): void {
    this.sharedService.showCloseButton = false;
    this.isShowCloseButton = this.sharedService.showCloseButton;
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  openFirst() {
    this.menu.toggle('sidemenu');
  }
}
