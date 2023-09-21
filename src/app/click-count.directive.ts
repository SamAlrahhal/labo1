import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[click-count]',
})
export class ClickCountDirective {
  @Input('click-count') initialValue: number = 0;
  private counter: number = 0;

  constructor() {}

  @HostListener('click') onClick() {
    this.counter++;
    console.log('Counter:', this.counter);
  }

  ngOnInit() {
    this.counter = this.initialValue;
  }
}
