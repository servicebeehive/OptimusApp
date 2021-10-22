import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardMegaHashDetailModel } from 'src/app/models/dashboard-megahash-detail.model';
import { ReturnResult } from 'src/app/models/return-result';
import { WithDrawGetOtpModel } from 'src/app/models/withdraw-get-otp.model';
import { WithDrawSubmitOtpModel } from 'src/app/models/withdraw-otp-submit.model';
import { WithDrawOtpModel } from 'src/app/models/wthdraw-otp.model';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';
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
  public megaHashDetails: DashboardMegaHashDetailModel[] = [];
  public withDrawLimit = 0;

  addWithdraw = this.fb.group({
    withdrawUnit: ['', Validators.required],
    exchangeAddress: ['', Validators.required],
    otp: [''],
  });

  constructor(
    public fb: FormBuilder,
    public withdrawService: WithdrawService,
    public notificationService: NotificationService,
    public router: Router,
    public sharedService: SharedService
  ) {}

  ngOnInit() {}

  async ionViewDidEnter() {
    await this.getMegaHashDetailForUser();
    this.withDrawLimit = this.sharedService.withDrawLimit;
  }

  public async getMegaHashDetailForUser() {
    this.megaHashDetails = this.sharedService.dashboardMegaHashDetails;
  }

  public withdrawSendOtp(): void {
    if (
      Number(this.addWithdraw.value.withdrawUnit) < this.withDrawLimit ||
      Number(this.addWithdraw.value.withdrawUnit) <= 0
    ) {
      this.notificationService.normalShowToast(
        `Less Than Withdraw Limit of ${this.withDrawLimit}MH`,
        false
      );
      return;
    }
    if (
      Number(this.addWithdraw.value.withdrawUnit) >
      this.megaHashDetails[0].ethtotalmined
    ) {
      this.notificationService.normalShowToast(
        'Please check your Withdraw ETH amount',
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
