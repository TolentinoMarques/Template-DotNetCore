import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public numero = 1000;

  public incrementCounter() {
    this.currentCount = this.currentCount + this.numero;
    if (this.currentCount > 6000) {
      this.currentCount = 0;
    }
  }
}
