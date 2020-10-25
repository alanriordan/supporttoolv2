import {NgModule} from '@angular/core';
import {LdapInfoComponent} from './ldap-info/ldap-info.component';
import {LdapRoutingModule} from './ldap-routing.module';
import {VendorModule} from '../vendor.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [LdapInfoComponent],
    imports: [LdapRoutingModule,
        VendorModule,
        FormsModule,
        CommonModule],
    exports: [LdapInfoComponent]
})
export class LdapModule {
}
