import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  
  constructor(public sharedservices:SharedService,public modalController: ModalController) { }

  ngOnInit() {
  }

public dismiss(): void {

  this.modalController.dismiss({
    dismissed: true,
  });
}

}
