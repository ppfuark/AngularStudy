import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: `
    <div class="div" [contentEditable]="isEditable"></div>
  `,
})
export class App {
  isEditable = true;
}
