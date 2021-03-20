import {Component, OnInit} from '@angular/core';
import {JmsService} from '../service/jms.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JmsTemplateService} from '../service/jms-template.service';

@Component({
    selector: 'app-jms-sender',
    templateUrl: './jms-sender.component.html',
    styleUrls: ['./jms-sender.component.css'],
    providers: []
})
export class JmsSenderComponent implements OnInit {

    constructor(private jmsService: JmsService, private formBuilder: FormBuilder) {
    }

    queues: Array<string>;
    formGroup: FormGroup;
    post: any = '';
    jmsMessage: string;
    selectedQueue: string;

    ngOnInit(): void {
        this.createForm();
        this.jmsService.getQueues().subscribe(data => {
            this.queues = data;
        });
    }

    createForm(): void {
        this.formGroup = this.formBuilder.group({
            selectedQueue: [null, Validators.required],
            message: [null, Validators.required],
            validate: ''
        });
    }

    onSubmit(post): void {
        this.post = post;
    }

    populateJmsTemplate(message: string): void {
        this.jmsMessage = message;
    }

    sendPayload(): void {
        this.jmsService.sendMessage(this.selectedQueue, this.jmsMessage);
    }
}
