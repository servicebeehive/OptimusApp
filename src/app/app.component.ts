import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { SharedService } from './services/shared/shared-service.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menu: MenuController,
    public router: Router,
    public firebaseDynamicLinks: FirebaseDynamicLinks,
    public alertController: AlertController,
    public platform: Platform,
    public sharedService: SharedService,
    public storage: Storage
  ) {
    this.inilizeApp();
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
      console.log('test_1');
      this.firebaseDynamicLinks.getDynamicLink().then(
        (res: any) => {
          console.log('Receiving Firebase DL', res);
          console.log('deepLink', res.deepLink);
          this.storage.set('deepLink', res.deepLink);
          this.sharedService.deepLink = res.deepLink;
        },
        (error: any) => {
          console.error('Firebase DL ERROR', error);
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
    console.log('onDidDismiss resolved with role', role);
  }
}
