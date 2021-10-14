export class CoinsDetailModel {
  public askPrice?: string;
  public askQty?: string;
  public bidPrice?: string;
  public bidQty?: string;
  public closeTime?: number;
  public count?: number;
  public firstId?: number;
  public highPrice?: string;
  public lastId?: number;
  public lastPrice?: number;
  public lastQty?: string;
  public lowPrice?: string;
  public openPrice?: string;
  public openTime?: number;
  public prevClosePrice?: string;
  public priceChange?: string;
  public priceChangePercent?: number;
  public quoteVolume?: number;
  public symbol?: string;
  public volume?: string;
  public weightedAvgPrice?: string;
  public imageUrl: string;
  constructor() {
    this.askPrice = '';
    this.askQty = '';
    this.bidPrice = '';
    this.bidQty = '';
    this.closeTime = 0;
    this.count = 0;
    this.firstId = 0;
    this.highPrice = '';
    this.lastId = 0;
    this.lastPrice = 0;
    this.lastQty = '';
    this.lowPrice = '';
    this.openPrice = '';
    this.openTime = 0;
    this.prevClosePrice = '';
    this.priceChange = '';
    this.priceChangePercent = 0;
    this.quoteVolume = 0;
    this.symbol = '';
    this.volume = '';
    this.weightedAvgPrice = '';
    this.imageUrl = '';
  }
}
