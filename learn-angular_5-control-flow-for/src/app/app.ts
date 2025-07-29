import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for (user of userList; track user.id){
      <div class="display-flex">
        <p>{{user.name}}</p>
        <p>{{user.id + 1}}</p>
      </div>
    }
  `,
  styles: [`
    .display-flex{
      display: flex;
      gap: 6px;
    }
  `]
})
export class App {
  userList = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]
}
