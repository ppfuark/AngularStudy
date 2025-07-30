import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      There's a secret message for you, hover to reveal 👀
      <p>{{ message }}</p>
      <button (click)="onMouseOver()">Click here to reveal!</button>
    </section>
  `,
})
export class App {
  message = 'Hi';

  onMouseOver() {
    this.message = "AAAAAAAAAAAAAAA";
    console.log(this.message);
  }
}
