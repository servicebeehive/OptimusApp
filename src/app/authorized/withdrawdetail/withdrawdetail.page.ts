import { Component, OnInit } from '@angular/core';
import { ReturnResult } from 'src/app/models/return-result';
import { WithdrawDetails } from 'src/app/models/withdraw-details.mode';
import { GetWithdrawDetails } from 'src/app/models/withdraw-get-details.mode';
import { WithdrawService } from 'src/app/services/withdraw/withdraw.service';

@Component({
  selector: 'app-withdrawdetail',
  templateUrl: './withdrawdetail.page.html',
  styleUrls: ['./withdrawdetail.page.scss'],
})
export class WithdrawdetailPage implements OnInit {
  public title = 'Withdraw Detial';
  public withdrawDetails: WithdrawDetails[];
  constructor(public withdrawService: WithdrawService) {}

  ngOnInit() {}

  public ionViewDidEnter() {
    const getWithdrawDetails = new GetWithdrawDetails();
    getWithdrawDetails.operationtype = 'WITHDRAWDETAILS';
    this.withdrawService
      .getWithdrawDetails(getWithdrawDetails)
      .then((res: ReturnResult<WithdrawDetails[]>) => {
        if (res.success) {
          this.withdrawDetails = res.data;
        }
      });
  }
}
