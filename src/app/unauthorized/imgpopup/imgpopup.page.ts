import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-imgpopup',
  templateUrl: './imgpopup.page.html',
  styleUrls: ['./imgpopup.page.scss'],
})
export class ImgpopupPage implements OnInit {

  constructor(public sharedservices:SharedService,public modalController: ModalController) { }

  ngOnInit() {
  }

public dismiss(): void {

  this.modalController.dismiss({
    dismissed: true,
  });
}
}
