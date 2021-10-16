import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SharedService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-share-app',
  templateUrl: './share-app.component.html',
  styleUrls: ['./share-app.component.scss'],
})
export class ShareAppComponent implements OnInit {
  public linkvalue = this.sharedService.userRefer;
  // eslint-disable-next-line max-len
  public url =
    // eslint-disable-next-line max-len
    //`https://projectoptimus.page.link/?link=http://13.233.81.41/?Code%3D${this.linkvalue}&apn=com.optimus.currency&st=Registration&sd=Get+maximum+rewards+on+Signup`;
    //public url =
    // eslint-disable-next-line max-len
    `https://projectoptimus.page.link/?link=http://13.233.81.41/?Code%3D${this.linkvalue}&apn=com.optimus.currency&afl=https://www.cryptohashh.com/index.php`;
  public message = 'Please click the below link';

  constructor(
    public toastController: ToastController,
    public sharedService: SharedService,
    public socialSharing: SocialSharing,
    public modalController: ModalController
  ) {}

  ngOnInit() {}
  public async copyContent(value) {
    const selBox = document.createElement('textarea');
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    const toast = await this.toastController.create({
      message: 'User Code Copied',
      duration: 2000,
      position: 'top',
      color: 'success',
      buttons: [
        {
          side: 'start',
          icon: 'checkmark-done-outline',
        },
      ],
    });
    toast.present();
  }

  shareApp() {
    this.socialSharing
      .share(this.message, null, null, this.url)
      .then(() => {
        this.dismiss();
      })
      .catch((e) => {
        console.log('error', e);
      });
  }

  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
