import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapHandThumbsUp, bootstrapHandThumbsUpFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './card.html',
  providers: [provideIcons({ bootstrapHandThumbsUp, bootstrapHandThumbsUpFill })]
})
export class Card {
  liked = false;
}
