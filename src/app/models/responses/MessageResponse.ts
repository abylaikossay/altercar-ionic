import { PartnerResponse } from './PartnerResponse';
import { ChatResponse } from './ChatResponse';

export class MessageResponse {
    id: number;
    createdAt: string;
    updatedAt: string;
    isRead: boolean;
    content: string;
    fileUrl: string;
    partner: PartnerResponse;
    author: any;
    chat: ChatResponse;
}
