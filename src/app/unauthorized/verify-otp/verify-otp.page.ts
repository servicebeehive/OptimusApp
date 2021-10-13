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

  verifyOtpDetail = this.fb.group({
    optDetail: ['', Validators.required],
  });

  constructor(
    public fb: FormBuilder,
    public modalController: ModalController,
    public navParams: NavParams,
    public notificationService: NotificationService,
    public loginServices: LoginService
  ) {}

  ngOnInit() {}

  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  public onVerifyOtp(): void {
    const verifyOtpData = new VerifyOtpModel();
    verifyOtpData.emailaddress = this.emailID;
    verifyOtpData.emailotp = this.verifyOtpDetail.value.optDetail;
    verifyOtpData.operationtype = 'VERIFY';
    verifyOtpData.tokenval = '';
    this.loginServices
      .verifyOtpDetail(verifyOtpData)
      .then((result: ReturnResult) => {
        if (result.success) {
          this.notificationService.showToast(result);
          this.dismiss();
        }
      });
  }
}
