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
  public url = 'https://projectoptimus.page.link/registration';
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

  shareFacebook() {
    this.socialSharing
      .shareViaFacebook(this.message, null, this.url)
      .then(() => {
        this.dismiss();
      })
      .catch((e) => {});
  }

  shareInstagram() {
    this.socialSharing
      .shareViaInstagram(this.message, null)
      .then(() => {
        this.dismiss();
      })
      .catch((e) => {});
  }

  shareTwitter() {
    this.socialSharing
      .shareViaTwitter(this.message, null, this.url)
      .then(() => {
        this.dismiss();
      })
      .catch((e) => {});
  }

  shareWhattApp() {
    this.socialSharing
      .shareViaWhatsApp(this.message, null, this.url)
      .then(() => {
        this.dismiss();
      })
      .catch((e) => {});
  }

  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
