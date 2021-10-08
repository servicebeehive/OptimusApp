import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-share-app',
  templateUrl: './share-app.component.html',
  styleUrls: ['./share-app.component.scss'],
})
export class ShareAppComponent implements OnInit {
  public linkvalue = this.sharedService.userRefer;

  constructor(
    public toastController: ToastController,
    public sharedService: SharedService
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
}
