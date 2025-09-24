import { Routes } from '@angular/router';
import {Home} from './home/home.component';
import {DetailsComponent} from './details/details.component';

export const routeConfig: Routes = [
    {
      path: '',
      component: Home,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
  ];

  export default routeConfig;