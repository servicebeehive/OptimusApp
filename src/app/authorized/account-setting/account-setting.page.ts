import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankInfoDetails } from 'src/app/models/bank-info.model';
import { ReturnResult } from 'src/app/models/return-result';
import { UserInfoDetails } from 'src/app/models/user-info.model';
import { BankService } from 'src/app/services/bank/bank.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AccountNumberValidators } from 'src/app/unauthorized/registration/confirm-password.validator';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {
  public title = 'Bank Details';
  public userInfoDetails: UserInfoDetails;

  addBankDetails = this.fb.group(
    {
      beneficiaryName: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      confirmAccountNumber: ['', Validators.required],
      bankName: ['', Validators.required],
      ifscCode: ['', Validators.required],
    },
    {
      validators: AccountNumberValidators.accountNumberValidator,
    }
  );

  constructor(
    public router: Router,
    public bankService: BankService,
    public fb: FormBuilder,
    public notificationService: NotificationService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getBankDetailForUser();
  }

  public async getBankDetailForUser() {
    this.bankService
      .getUserProfileDetails()
      .then((res: ReturnResult<UserInfoDetails>) => {
        if (res.success) {
          this.userInfoDetails = res.data;
          if (this.userInfoDetails.bankaccountnumber !== null) {
            this.addBankDetails
              .get('beneficiaryName')
              ?.setValue(this.userInfoDetails.beneficiaryname);
            this.addBankDetails
              .get('accountNumber')
              ?.setValue(this.userInfoDetails.bankaccountnumber);
            this.addBankDetails
              .get('confirmAccountNumber')
              ?.setValue(this.userInfoDetails.bankaccountnumber);
            this.addBankDetails
              .get('bankName')
              ?.setValue(this.userInfoDetails.bankname);
            this.addBankDetails
              .get('ifscCode')
              ?.setValue(this.userInfoDetails.ifccode);
          }
        }
      });
  }

  onClickAddBankDetails() {
    const bankInfoDetails = new BankInfoDetails();
    bankInfoDetails.beneficiaryname = this.addBankDetails.value.beneficiaryName;
    bankInfoDetails.bankactnumber =
      this.addBankDetails.value.confirmAccountNumber;
    bankInfoDetails.bankname = this.addBankDetails.value.bankName;
    bankInfoDetails.ifccode = this.addBankDetails.value.ifscCode;
    bankInfoDetails.operationtype = 'UPDATE';
    this.bankService.postBankInfo(bankInfoDetails).then((res: ReturnResult) => {
      if (res.success) {
        this.notificationService.showToast(res);
      }
    });
  }
}
