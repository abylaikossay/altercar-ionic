import { CarBrandResponse } from './CarBrandResponse';

export class CarModelResponse {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  name: string;
  carBrand: CarBrandResponse;
  carBrandName: string;
}
