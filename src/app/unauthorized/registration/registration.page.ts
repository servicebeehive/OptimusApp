import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  public dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  public onSignin(){
    
  }

}
