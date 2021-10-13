import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ReturnResult } from 'src/app/models/return-result';
import { VerifyForgotPasswordOtpModel } from 'src/app/models/verify-forgotpassword-otp.model';
import { VerifyOtpModel } from 'src/app/models/verify-otp.model';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { CustomValidators } from '../registration/confirm-password.validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public emailpattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
  public showOpt = false;

  addforgotPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailpattern)]],
  });

  addVerifyOtp = this.fb.group(
    {
      otp: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: CustomValidators.passwordMatchValidator,
    }
  );

  constructor(
    public modalController: ModalController,
    public fb: FormBuilder,
    public loginService: LoginService,
    public notificationServices: NotificationService
  ) {}

  ngOnInit() {}

  public dismiss(): void {
    this.showOpt = false;
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  public onClickForgotPassword() {
    this.showOpt = true;
  }

  public async onOtpVerify(): Promise<void> {
    const verifyOtp = new VerifyForgotPasswordOtpModel();
    verifyOtp.emailaddress = this.addforgotPasswordForm.value.email;
    verifyOtp.otp = this.addVerifyOtp.value.otp;
    verifyOtp.newpassword = this.addVerifyOtp.value.confirmPassword;
    verifyOtp.operationtype = 'ResetPwd';
    this.loginService.updatePassword(verifyOtp).then((res: ReturnResult) => {
      if (res.success) {
        this.notificationServices.showToast(res);
        this.dismiss();
      }
    });
  }
}
