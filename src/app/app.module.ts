import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {AppRoutingModule} from './app-routing.module';
import {EmailConfigComponent} from './email-config/email-config.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {EmailSenderComponent} from './email-sender/email-sender.component';
import {HttpClientModule} from '@angular/common/http';
import {EnvService} from './service/env.service';
import {VendorModule} from './vendor.module';
import {LdapModule} from './ldap/ldap.module';
import {JmsModule} from './jms/jms.module';
import {VascoModule} from './vasco/vasco.module';
import {MatCard} from '@angular/material/card';
import {CvModule} from './citiVelocity/cv.module';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        VendorModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        LdapModule,
        VascoModule,
        JmsModule,
        CvModule
    ],
    declarations: [
        AppComponent,
        MenuItemComponent, EmailConfigComponent, UserDetailsComponent,
        EmailSenderComponent
    ],
    bootstrap: [AppComponent],
    providers: [EnvService],
    exports: [BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        VendorModule,
    MatCard]
})
export class AppModule {
}
