import {UserProfileResponse} from './UserProfileResponse';
import {IspProfessionsResponse} from './IspProfessionsResponse';
import {IspRatingResponse} from './ispRatingResponse';

export class IspResponse {
    ispId: number;
    username: string;
    email: string;
    description: string;
    experience: number;
    location: string;
    userProfile: UserProfileResponse;
    portfolioPhotos: string[];
    ispRatings: IspRatingResponse[];
    professions: IspProfessionsResponse[];
    balance: number;

}
