import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value;
    const passControl = control.root.get('confirmPassword');
    if (passControl) {
      const passValue = passControl.value;
      if (
        passValue !== password ||
        passValue === '' ||
        passValue === null ||
        passValue === undefined ||
        password === '' ||
        password == null ||
        password === undefined ||
        password !== passValue
      ) {
        control.get('confirmPassword').setErrors({ noPassswordMatch: true });
        return {
          isError: true,
        };
      }
    } else {
      return null;
    }
  }
}

export class AccountNumberValidators {
  static accountNumberValidator(control: AbstractControl) {
    const accountNumber: string = control.get('accountNumber').value;
    const confirmAccountNumber = control.root.get('confirmAccountNumber');
    if (confirmAccountNumber) {
      const confirmAccountNumberValue = confirmAccountNumber.value;
      if (
        confirmAccountNumberValue !== accountNumber ||
        confirmAccountNumberValue === '' ||
        confirmAccountNumberValue === null ||
        confirmAccountNumberValue === undefined ||
        accountNumber === '' ||
        accountNumber == null ||
        accountNumber === undefined ||
        accountNumber !== confirmAccountNumberValue
      ) {
        control
          .get('confirmAccountNumber')
          .setErrors({ noAccountNumberMatch: true });
        return {
          isError: true,
        };
      }
    } else {
      return null;
    }
  }
}
