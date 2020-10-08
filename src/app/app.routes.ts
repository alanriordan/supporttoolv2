import {UserDetailsComponent} from './user-details/user-details.component';
import {Routes} from '@angular/router';
import {JmsListenerComponent} from './jms-listener/jms-listener.component';

export const routes: Routes = [

  { path: 'userdetails', component: UserDetailsComponent },
  { path: 'listeners', component: JmsListenerComponent },
  { path: '', redirectTo: '/userdetails', pathMatch: 'full'  },
];
