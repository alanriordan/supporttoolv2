import {NgModule} from '@angular/core';
import {VascoInfoComponent} from './vasco-info/vasco-info.component';
import {VascoRoutingModule} from './vasco-routing.module';
import {VendorModule} from '../vendor.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [VascoInfoComponent],
    imports: [VascoRoutingModule,
        VendorModule,
        FormsModule,
        CommonModule],
    exports: [VascoInfoComponent]
})
export class VascoModule {
}
