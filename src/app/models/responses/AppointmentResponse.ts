import {PartnerResponse} from './PartnerResponse';
import {UserCarResponse} from './UserCarResponse';

export class AppointmentResponse {
  id: number;
  createdAt: string;
  updatedAt: string;
  appointmentDate: any;
  description: string;
  finishTill: any;
  partner: PartnerResponse;
  partnerDescription: any;
  setOfWorks: any[];
  startFrom: any;
  status: string;
  userCar: UserCarResponse;
  userInfo: any;
}
