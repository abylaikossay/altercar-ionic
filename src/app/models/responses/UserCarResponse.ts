import { CarBrandResponse } from './CarBrandResponse';
import { CarModelResponse } from './CarModelResponse';

export class UserCarResponse {
  id: number;
  carBrand: CarBrandResponse;
  carModel: CarModelResponse;
  carBrandId: number;
  carModelId: number;
  carYear: number;
  carNumber: string;
  engineVolume: number;
  vinCode: string;
  color: string;
}

