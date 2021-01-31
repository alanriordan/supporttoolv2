import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CvMessageComponent} from './cv-message/cv-message.component';
import {CvRoutingModule} from './cv-routing.module';
import {VendorModule} from '../vendor.module';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [CvMessageComponent],
    imports: [
        CommonModule,
        CvRoutingModule,
        VendorModule,
        FormsModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class CvModule { }
