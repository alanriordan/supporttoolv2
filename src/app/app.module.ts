import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';

import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { JmsListenerComponent } from './jms-listener/jms-listener.component';
import { EmailConfigComponent } from './email-config/email-config.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LdapInfoComponent } from './ldap-info/ldap-info.component';
import { JmsSenderComponent } from './jms-sender/jms-sender.component';
import { EmailSenderComponent } from './email-sender/email-sender.component';
import {HttpClientModule} from '@angular/common/http';
import {JmsService} from './jms.service';
import { JmsMessageTemplateComponent } from './jms-message-template/jms-message-template.component';
import { TestFormComponent } from './test-form/test-form.component';

/**
 * NgModule that includes all Material modules that are required.
 */
@NgModule({
    exports: [
        // CDK
        A11yModule,
        BidiModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,

        CdkStepperModule,
        CdkTableModule,

        // Material
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
    ],
    imports: [

    MatInputModule,

    MatButtonModule,

    MatSelectModule,

    MatRadioModule,

    MatCardModule,

    ReactiveFormsModule],
    declarations: [TestFormComponent]
})
export class MaterialModule {
}

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MenuItemComponent, JmsListenerComponent, EmailConfigComponent, UserDetailsComponent, LdapInfoComponent,
        JmsSenderComponent, EmailSenderComponent, JmsMessageTemplateComponent
    ],
    bootstrap: [AppComponent],
    providers: [JmsService]
})
export class AppModule {
}
