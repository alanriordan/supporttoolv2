import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailConfigComponent} from './email-config/email-config.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {LdapInfoComponent} from './ldap/ldap-info/ldap-info.component';
import {EmailSenderComponent} from './email-sender/email-sender.component';
import {JmsRoutingModule} from './jms/jms-routing.module';
import {LdapRoutingModule} from './ldap/ldap-routing.module';


const routes: Routes = [
  {path: 'email-config', component: EmailConfigComponent},
  {path: 'email-sender', component: EmailSenderComponent},
  {path: 'user-details', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
