import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading = false;

  constructor() { }

  complete(): void {
    this.loading = false;
  }
  start(): any {
    this.loading = true;
  }
}
