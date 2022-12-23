import { PartnerResponse } from './PartnerResponse';

export class ChatResponse {
    id: number;
    createdAt: string;
    updatedAt: string;
    isClosed: boolean;
    isRead: boolean;
    lastMessage: string;
    partner: PartnerResponse;
    user: any;
}
