import {SortResponse} from './SortResponse';

export class PageableResponse {
  offset: any;
  pageNumber: number;
  pageSize: number
  paged: boolean;
  sortResponse: SortResponse
  unpaged: boolean
}
