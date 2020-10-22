import {NgModule} from '@angular/core';
import {AppModule} from '../app.module';
import {LdapInfoComponent} from './ldap-info/ldap-info.component';
import {LdapRoutingModule} from './ldap-routing.module';
import {MatCardContent} from '@angular/material/card';
import {VendorModule} from "../vendor.module";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [LdapInfoComponent],
    imports: [LdapRoutingModule, VendorModule, FormsModule], exports: [LdapInfoComponent]
})
export class LdapModule {
}
