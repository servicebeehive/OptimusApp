import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PerHoursDataModel } from 'src/app/models/per-hours-data.model';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';
import { SharedService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  title = 'Calculator';
  public dollorPrice = 0;
  public perUnitPrice = 0;
  mHDetail = new PerHoursDataModel();

  calculateEthDetail = this.fb.group({
    amount: ['', Validators.required],
    megaHash: ['', Validators.required],
  });

  constructor(
    public modalController: ModalController,
    public fb: FormBuilder,
    public sharedServices: SharedService,
    public calculatorService: CalculatorService
  ) {}

  ngOnInit() {
    this.perUnitPrice = Number(this.sharedServices.perUnitPriceForCalculator);
    this.dollorPrice = Number(this.sharedServices.dollorPrice);
  }

  //1mh = 3000 INR

  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  amountForMHClauculate(eve) {
    console.log('eve.target.value');
    this.calculateEthDetail.get('megaHash')?.setValue(eve.target.value);
  }

  public async onCalculate() {
    if (
      this.calculateEthDetail.invalid ||
      this.calculateEthDetail.value.megaHash === 0
    ) {
      return;
    }
    const value = await this.calculatorService.getCalculatedMHValue(
      this.calculateEthDetail.value.megaHash
    );
    if (value.status) {
      this.mHDetail = new PerHoursDataModel();
      this.mHDetail.day = value.data.day;
      this.mHDetail.month = value.data.month;
    } else {
      this.mHDetail = new PerHoursDataModel();
      this.mHDetail.day.coins = 0;
      this.mHDetail.month.coins = 0;
    }
  }
}
