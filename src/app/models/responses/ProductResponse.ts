import {GenderEnum} from './GenderEnum';
import {IspTopResponse} from './IspTopResponse';

export class ProductResponse {
  productId: number;
  ispProductId: number;
  name: string;
  uslugaName: string;
  productName: string;
  description: string;
  categoryId: number;
  gender: GenderEnum;
  photos: string[];
  price: number;
  ispInfo: IspTopResponse;
  duration: number;
}
