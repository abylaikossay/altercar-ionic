import {IspResponse} from './IspResponse';
import {ProductResponse} from './ProductResponse';

export class OrderResponse {
  id: number;
  createdAt: string;
  updatedAt: string;
  sum: number;
  partner: any;
  amount: number;
  user: any;
  status: string;
  type: string;
  comment: string;
  manager: any;
  tireHistories: any;
}
