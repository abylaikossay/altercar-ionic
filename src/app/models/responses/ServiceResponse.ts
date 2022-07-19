import {CategoryResponse} from './CategoryResponse';

export class ServiceResponse {
  id: number;
  name: string;
  photo: string;
  productCount: number;
  categoryResponses: CategoryResponse[]; // xz
}
