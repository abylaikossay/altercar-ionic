import {TireCatalogTypeEnum} from './TireCatalogTypeEnum';

export class TireCatalogResponse {
  id: number;
  type: TireCatalogTypeEnum;
  filterName: string;
  code: string;
  checked: boolean = false;
}
