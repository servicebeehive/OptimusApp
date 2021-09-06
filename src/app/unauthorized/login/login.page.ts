import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegistrationPage } from '../registration/registration.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  credentials = {username: '', password: '', remember: 'yes'}; // select remember by default


  constructor(private modalController: ModalController,
              public router:Router) {

  }

  ngOnInit(){
   
  }

  public onSignin(){
    this.router.navigate(['authorized/dashboard']);
  }

  public async onSignUp(){
    const model = await this.modalController.create({
      component:RegistrationPage,
      cssClass:'my-custom-class'
    });
   await model.present();
  }
}
