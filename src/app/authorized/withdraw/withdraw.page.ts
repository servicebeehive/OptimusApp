import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReturnResult } from 'src/app/models/return-result';
import { WithDrawGetOtpModel } from 'src/app/models/withdraw-get-otp.model';
import { WithDrawSubmitOtpModel } from 'src/app/models/withdraw-otp-submit.model';
import { WithDrawOtpModel } from 'src/app/models/wthdraw-otp.model';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { WithdrawService } from 'src/app/services/withdraw/withdraw.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  public title = 'Withdraw';
  public isShowOtpPanel = false;
  public withdrawid = 0;

  addWithdraw = this.fb.group({
    withdrawUnit: ['', Validators.required],
    exchangeAddress: ['', Validators.required],
    otp: [''],
  });

  constructor(
    public fb: FormBuilder,
    public withdrawService: WithdrawService,
    public notificationService: NotificationService,
    public router: Router
  ) {}

  ngOnInit() {}

  public withdrawSendOtp(): void {
    if (Number(this.addWithdraw.value.withdrawUnit) > 2) {
      this.notificationService.normalShowToast(
        'Exceeding Threshold Limit of 2MH',
        false
      );
      return;
    }
    this.isShowOtpPanel = false;
    const withDrawGetOtp = new WithDrawGetOtpModel();
    withDrawGetOtp.exchangeaddress = this.addWithdraw.value.exchangeAddress;
    withDrawGetOtp.withdrawunit = this.addWithdraw.value.withdrawUnit;
    this.withdrawService
      .getWithdrawOtp(withDrawGetOtp)
      .then((res: ReturnResult<WithDrawOtpModel>) => {
        this.isShowOtpPanel = true;
        this.withdrawid = Number(res.data);
      });
  }

  public onSubmitOtp(): void {
    const withDrawSubmitOtp = new WithDrawSubmitOtpModel();
    withDrawSubmitOtp.emailotp = this.addWithdraw.value.otp;
    withDrawSubmitOtp.withdrawid = this.withdrawid;
    withDrawSubmitOtp.operationtype = 'VERIFY';
    this.withdrawService
      .postWithdrawOtp(withDrawSubmitOtp)
      .then((res: ReturnResult) => {
        if (res.success) {
          this.notificationService.showToast<WithDrawSubmitOtpModel>(res);
          this.isShowOtpPanel = false;
          this.addWithdraw.reset();
          this.router.navigate(['authorized/dashboard']);
        }
      });
  }

  onClickCancel() {
    this.isShowOtpPanel = false;
  }
}
