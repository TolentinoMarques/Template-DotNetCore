import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 1;
  public numero = 2000;

  public incrementCounter() {
    this.currentCount = this.currentCount + this.numero;
    if (this.currentCount > 8000) {
      this.currentCount = 0;
    }
  }
}
