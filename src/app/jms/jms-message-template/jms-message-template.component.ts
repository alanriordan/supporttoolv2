import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {create} from 'xmlbuilder2';
import {JmsTemplateService} from '../service/jms-template.service';
import {JmsMessageType} from '../../common/jms-message-type.enum';

@Component({
    selector: 'app-jms-message-template',
    templateUrl: './jms-message-template.component.html',
    styleUrls: ['./jms-message-template.component.css'],
    providers: [JmsTemplateService]
})
export class JmsMessageTemplateComponent implements OnInit {

    constructor(private jmsTemplateService: JmsTemplateService) {
    }

    @Output() messageGenerated = new EventEmitter<string>();

    messageTypes: string[];
    authorizationTypes: string[];
    selectedMessageType: JmsMessageType;
    selectedAuthorizationType: string;
    messageKeys: string;


    generatePayload(): void {
        const templates = this.jmsTemplateService.generateMessage(this.selectedMessageType,
            this.selectedAuthorizationType, this.messageKeys.split(','));
        this.messageGenerated.emit(templates.join('\n'));
    }

    ngOnInit(): void {
        const jmsMessageTypeNames = [];
        for (const type in JmsMessageType) {
            if (isNaN(Number(type))) {
                jmsMessageTypeNames.push(type);
            }
        }
        this.messageTypes = jmsMessageTypeNames;
        this.authorizationTypes = ['Authorize_Update', 'Authorize_Create'];
    }

}
