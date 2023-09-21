import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter: number = 0;

  increment() {
    this.counter++;
  }

  getCounter() {
    return this.counter;
  }
}
