import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { VerifyOtpModel } from 'src/app/models/verify-otp.model';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {

  public emailID = this.navParams.get('value');

  constructor(public fb: FormBuilder,
    public modalController: ModalController,
    private navParams: NavParams) {

  }

  verifyOtpDetail = this.fb.group({
    optDetail: ['', Validators.required]
  })

  ngOnInit() {
  }

  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  public onVerifyOtp(): void {
    const VerifyOtpData = new VerifyOtpModel();
    VerifyOtpData.emailaddress = this.emailID;
    VerifyOtpData.emailotp = this.verifyOtpDetail.value.optDetail;
    VerifyOtpData.operationtype='VERIFY';
    VerifyOtpData.tokenval = ''
    console.log('VerifyOtpData', VerifyOtpData);
  }

}
