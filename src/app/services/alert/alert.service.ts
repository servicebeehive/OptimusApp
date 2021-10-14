import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(public alertController: AlertController) {}

  async presentAlertConfirm(
    headerTxt: string,
    messageTxt: string
  ): Promise<boolean> {
    let checkData: boolean;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: headerTxt,
      message: messageTxt,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => (checkData = false),
        },
        {
          text: 'Okay',
          handler: () => (checkData = true),
        },
      ],
    });
    await alert.present();

    const { data } = await alert.onDidDismiss();
    return checkData;
  }
}
