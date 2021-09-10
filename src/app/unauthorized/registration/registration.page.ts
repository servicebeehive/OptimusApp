import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { OtpDetail } from 'src/app/models/otp.model';
import { RegistrationDetail } from 'src/app/models/registration.model';
import { ReturnResult } from 'src/app/models/return-result';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { VerifyOtpPage } from '../verify-otp/verify-otp.page';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit { 

  constructor(public modalController: ModalController,
              public fb: FormBuilder,
              public loginService:LoginService,
              public notificationService:NotificationService) { }

  ngOnInit() {

  }

  addRegistrationDetail = this.fb.group({
    fName: ['', [Validators.required]],
    lName: [''],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    referralCode: [''],
    checkTermsCondition: [false, Validators.requiredTrue],
  }, {
    validator: ConfirmPasswordValidator("password", "confirmPassword")
  });

  public dismiss():void {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  public onSignup():void {
    const registration_Detail = new RegistrationDetail();
    registration_Detail.firstname = this.addRegistrationDetail.value.fName;
    registration_Detail.lastname = this.addRegistrationDetail.value.lName;
    registration_Detail.emailaddress = this.addRegistrationDetail.value.email;
    registration_Detail.mobilenumber = this.addRegistrationDetail.value.phoneNumber;
    registration_Detail.pwd = this.addRegistrationDetail.value.confirmPassword;
    registration_Detail.refcode = this.addRegistrationDetail.value.referralCode;
    this.loginService.postRegistrationDetail(registration_Detail).then((result:ReturnResult<OtpDetail>) =>{
      if(result.success){
        this.notificationService.showToast<OtpDetail>(result)
        this.dismiss();
        this.onOtpVerify(registration_Detail.emailaddress);
      }
      else{
        this.notificationService.showToast<OtpDetail>(result)
      }
    })
  }

  public async onOtpVerify(emailID?:string):Promise<void>{
    console.log('emailID',emailID)
    const model = await this.modalController.create({
      component: VerifyOtpPage,
      cssClass: 'my-custom-class',
      componentProps: { value: emailID }
    });
    await model.present();
  }

}
