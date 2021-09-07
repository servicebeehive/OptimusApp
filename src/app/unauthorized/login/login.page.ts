import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { loginDetail } from 'src/app/models/login.model';
import { ReturnResult } from 'src/app/models/return-result';
import { userDetail } from 'src/app/models/userdetail.model';
import { AccountService } from 'src/app/services/account/account.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { RegistrationPage } from '../registration/registration.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController: ModalController,
    public router: Router,
    public fb: FormBuilder,
    public loginService:LoginService,
    public notificationService:NotificationService,
    public accountServices:AccountService,
    public toast: ToastController,
    public alertController: AlertController) { }

  addloginDetail = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  ngOnInit() {

  }

  public async onSignin():Promise<void> {

    const loginDetail_data = new loginDetail();
    loginDetail_data.emailaddress = this.addloginDetail.value.username;
    loginDetail_data.pwd = this.addloginDetail.value.password;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: loginDetail_data.emailaddress,
      buttons: ['OK']
    });

    await alert.present();

    this.loginService.getUserDetails(loginDetail_data).then((result: ReturnResult<userDetail>)=>{
      this.toast.create({
        message: result.message,
        position: 'top',
        duration: 3000,
        cssClass: result.success ? "success-class" : "error-class"
      }).then((toastData) => {
        toastData.present();
      });
      // if(result.success){
      //   this.accountServices.setAccessToken(result.data)
      //   this.router.navigate(['authorized/dashboard']);
      // }
      // else{
      //   this.notificationService.showToast<userDetail>(result)
      // }
    })
  }

  public async onSignUp() {
    const model = await this.modalController.create({
      component: RegistrationPage,
      cssClass: 'my-custom-class'
    });
    await model.present();
  }
}
