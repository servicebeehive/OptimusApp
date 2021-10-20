import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { loginDetail } from 'src/app/models/login.model';
import { ReturnResult } from 'src/app/models/return-result';
import { userDetail } from 'src/app/models/userdetail.model';
import { AccountService } from 'src/app/services/account/account.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { RegistrationPage } from '../registration/registration.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  addloginDetail = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  constructor(
    public modalController: ModalController,
    public router: Router,
    public fb: FormBuilder,
    public loginService: LoginService,
    public notificationService: NotificationService,
    public accountServices: AccountService,
    public toast: ToastController,
    public sharedService: SharedService
  ) {}

  ngOnInit() {}

  public async onSignin(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const loginDetail_data = new loginDetail();
    loginDetail_data.emailaddress = this.addloginDetail.value.username;
    loginDetail_data.pwd = this.addloginDetail.value.password;
    this.loginService
      .getUserDetails(loginDetail_data)
      .then((result: ReturnResult<userDetail>) => {
        if (result.success) {
          this.accountServices.setAccessToken(result.data);
          this.sharedService.userRefer = result.data.usercode;
          if (this.sharedService.checkLoginType) {
            this.router.navigate(['authorized/purchase-flow']);
          } else {
            this.router.navigate(['authorized/dashboard']);
          }
        } else {
          this.notificationService.showToast<userDetail>(result);
        }
      });
  }

  public async onSignUp() {
    const model = await this.modalController.create({
      component: RegistrationPage,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }

  public async onClickForgotPassword() {
    const model = await this.modalController.create({
      component: ForgotPasswordPage,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }
}
