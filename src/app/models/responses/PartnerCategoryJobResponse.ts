import { CategoryResponse } from './CategoryResponse';
import { PartnerResponse } from './PartnerResponse';

export class PartnerCategoryJobResponse {
  id: number;
  category: CategoryResponse;
  duration: number;
  createdAt: string;
  updatedAt: string;
  jobName: string;
  partner: PartnerResponse;
}

