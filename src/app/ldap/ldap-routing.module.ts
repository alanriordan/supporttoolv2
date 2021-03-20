import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LdapInfoComponent} from './ldap-info/ldap-info.component';


const routes: Routes = [
  {path: 'ldap-info', component: LdapInfoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LdapRoutingModule { }
