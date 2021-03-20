import {NgModule} from '@angular/core';
import {JmsService} from './service/jms.service';
import {JmsListenerComponent} from './jms-listener/jms-listener.component';
import {JmsSenderComponent} from './jms-sender/jms-sender.component';
import {JmsMessageTemplateComponent} from './jms-message-template/jms-message-template.component';
import {JmsBrowserComponent} from './jms-browser/jms-browser.component';
import {JmsRoutingModule} from './jms-routing.module';
import {VendorModule} from '../vendor.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [JmsListenerComponent, JmsSenderComponent, JmsMessageTemplateComponent, JmsBrowserComponent],
    imports: [
        VendorModule,
        FormsModule,
        CommonModule,
        JmsRoutingModule
    ],
    providers: [JmsService],
    exports: [JmsListenerComponent, JmsSenderComponent, JmsMessageTemplateComponent, JmsBrowserComponent]
})
export class JmsModule {
}
