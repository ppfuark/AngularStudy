import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" typer="text" [(ngModel)]="favoriteFramework"/>
    </label>
  `,
  imports: [FormsModule],
})
export class User {
  username = 'youngTech';
  favoriteFramework = '';
}
