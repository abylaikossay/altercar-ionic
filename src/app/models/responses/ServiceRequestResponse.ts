import {PartnerResponse} from './PartnerResponse';
import {UserCarResponse} from './UserCarResponse';
import { CategoryResponse } from './CategoryResponse';
import { RequestStatusEnum } from './RequestStatusEnum';

export class ServiceRequestResponse {
  id: number;
  createdAt: string;
  updatedAt: string;
  userCar: UserCarResponse;
  user: any;
  category: CategoryResponse;
  isFavoriteCategory: boolean;
  partner: PartnerResponse;
  requestDate: Date;
  description: string;
  price: number;
  status: RequestStatusEnum;
  photoUrls: string[];
}
