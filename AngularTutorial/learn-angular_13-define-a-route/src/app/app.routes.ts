import {Routes} from '@angular/router';
import {Home} from './home/home';
// import {User} from './user/user'

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  // {
  //   path: '/user',
  //   component: User,
  // },
];
