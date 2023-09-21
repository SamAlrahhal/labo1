import { Component, OnInit } from '@angular/core';

class ClickObject {
  constructor(public serialNumber: number, public timeStamp: Date) {}
}

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css'],
})
export class ClickComponent implements OnInit {
  showDiv = false;
  clicks: ClickObject[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleDiv(): void {
    this.showDiv = !this.showDiv;
    this.clicks.push(new ClickObject(this.clicks.length + 1, new Date()));
    if (this.clicks.length >= 10) {
      alert('Button clicked 10 times!');
      this.reset();
    }
  }

  reset(): void {
    this.showDiv = false;
    this.clicks = [];
  }
}
