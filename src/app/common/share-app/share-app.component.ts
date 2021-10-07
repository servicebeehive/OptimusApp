import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-share-app',
  templateUrl: './share-app.component.html',
  styleUrls: ['./share-app.component.scss'],
})
export class ShareAppComponent implements OnInit {
  public linkvalue='https://play.google.com/store/apps/details?id=com.optimus.currency'
 
  constructor(public toastController: ToastController) { }

  ngOnInit() {}
  public async copyContent(value){
    let selBox = document.createElement('textarea');
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    const toast = await this.toastController.create({
      message: 'Link Copied',
      duration: 2000,
      position: 'top',
      color:'success',
      buttons: [
        {
          side: 'start',
          icon: 'checkmark-done-outline',}]
    });
    toast.present();
  }
  
}
