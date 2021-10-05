import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { ReturnResult } from 'src/app/models/return-result';
import { VerifyOtpModel } from 'src/app/models/verify-otp.model';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
  public emailID = this.navParams.get('value');

  constructor(
    public fb: FormBuilder,
    public modalController: ModalController,
    public navParams: NavParams,
    public notificationService: NotificationService,
    public loginServices: LoginService
  ) {}

  verifyOtpDetail = this.fb.group({
    optDetail: ['', Validators.required],
  });

  ngOnInit() {}

  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  public onVerifyOtp(): void {
    const VerifyOtpData = new VerifyOtpModel();
    VerifyOtpData.emailaddress = this.emailID;
    VerifyOtpData.emailotp = this.verifyOtpDetail.value.optDetail;
    VerifyOtpData.operationtype = 'VERIFY';
    VerifyOtpData.tokenval = '';
    this.loginServices
      .verifyOtpDetail(VerifyOtpData)
      .then((result: ReturnResult) => {
        if (result.success) {
          this.notificationService.showToast(result);
          this.dismiss();
        }
      });
  }
}
