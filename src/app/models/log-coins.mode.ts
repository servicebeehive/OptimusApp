export class LogCoinsModel {
  public currencycode: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public to_char: string;
  public coinvalue: number;

  constructor() {
    this.currencycode = '';
    this.to_char = '';
    this.coinvalue = 0;
  }
}
