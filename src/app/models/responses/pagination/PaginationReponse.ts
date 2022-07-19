import {PageableResponse} from './PageableResponse';

export class PaginationReponse<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: PageableResponse;
  size: number
  sortResponse: any;
  totalElements: number;
  totalPages: number;
}

