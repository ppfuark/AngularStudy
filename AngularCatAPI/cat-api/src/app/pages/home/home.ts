import { Component, inject } from '@angular/core';
import { Request } from '../../services/request';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  requestService = inject(Request);
  data$: Observable<any>;

  constructor(){
    this.data$ = this.requestService.getData('https://api.thecatapi.com/v1/images/search?limit=10');
  }

  trackById(index: number, item: any): string{
    return item.id;
  }
}
