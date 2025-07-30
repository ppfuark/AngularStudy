import {Component} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li class="image-container">
        Static Image:
        <img ngSrc="image.png" alt="Angular logo" height="600" width="800" priority />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32"/>
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
  providers: [
    provideImgixLoader('https://my.base.url/'),
  ]
})
export class User {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}