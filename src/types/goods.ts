interface InfoLabel {
  code: string;
  title: string;
  color: string;
}

export interface Goods {
  goodsNo: number;
  goodsName: string;
  goodsLinkUrl: string;
  thumbnail: string;
  displayGenderText: string;
  isSoldOut: boolean;
  normalPrice: number;
  price: number;
  saleRate: number;
  brand: string;
  brandName: string;
  brandLinkUrl: string;
  reviewCount: number;
  reviewScore: number;
  isOptionVisible: boolean;
  isAd: boolean;
  infoLabelList: InfoLabel[];
  imageLabelList: any[];
  clickTrackers: any[];
  impressionTrackers: any[];
  snap: any;
  score: number;
}
