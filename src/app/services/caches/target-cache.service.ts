import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TargetCacheService {

  private caches: string[] = [];
  private notCaches: Map<string, number> = new Map<string, number>();

  constructor() {
  }

  saveAfter(url: string, count: number = 3) {
    this.notCaches.set(url, count);
  }

  clear(url: string) {
    let currentCount = this.notCaches.get(url);
    if (currentCount) {
      currentCount--;
      this.notCaches.set(url, currentCount);
      return true;
    } else {
      this.notCaches.delete(url);
      return false;
    }
  }
}
