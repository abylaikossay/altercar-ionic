import {ProductResponse} from './ProductResponse';

export class CategoryResponse {
  id: number;
  name: string;
  description: string;
  photo: string;
  productResponses: ProductResponse[];
  selected: boolean = false;
}
