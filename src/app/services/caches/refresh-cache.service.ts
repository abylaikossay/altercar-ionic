import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshCacheService {

  private resolverLength = 0;

  constructor() { }

  getResolverLength(){
    return this.resolverLength;
  }

  setResolverLength(length: number){
    return this.resolverLength = length;
  }

  decreseResolverLength(){
    this.resolverLength--;
  }
}
