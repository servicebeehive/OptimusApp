import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { SharedService } from './services/shared/shared-service.service';
import { Storage } from '@ionic/storage-angular';
import { AccountService } from './services/account/account.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public islogeedIn = false;
  constructor(
    private menu: MenuController,
    public router: Router,
    public firebaseDynamicLinks: FirebaseDynamicLinks,
    public alertController: AlertController,
    public platform: Platform,
    public sharedService: SharedService,
    public storage: Storage
  ) {
    this.storage.create();
    this.inilizeApp();
    this.sharedService.dollorPrice = '74';
    this.sharedService.perUnitPriceForCalculator = '3000';
  }
  openFirst() {
    this.menu.enable(true, 'sidemenu');
    this.menu.open('sidemenu');
  }

  openEnd() {
    this.menu.open('end');
  }
  bankDetail() {
    this.router.navigate(['authorized/account-setting']);
    this.menu.close();
  }

  inilizeApp() {
    this.platform.ready().then(() => {
      this.firebaseDynamicLinks.getDynamicLink().then(
        (res: any) => {
          if (res != null) {
            this.storage.set('deepLink', res.deepLink);
          }
        },
        (error: any) => {
          this.presentAlert(error);
        }
      );
    });
  }

  async presentAlert(messageStr: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: messageStr,
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
