interface InfoLabel {
  code: string;
  title: string;
  color: string;
}

interface ImageLabel {
  code: string;
  text: string;
}

interface Tracker {
  url: string;
  type?: string;
}

interface Snap {
  id?: number;
  url?: string;
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
  imageLabelList: ImageLabel[];
  clickTrackers: Tracker[];
  impressionTrackers: Tracker[];
  snap: Snap;
  score: number;
}
