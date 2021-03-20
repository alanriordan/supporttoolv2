import {Injectable} from '@angular/core';
import {JmsMessageType} from '../../common/jms-message-type.enum';
import {create} from 'xmlbuilder2';

@Injectable({
    providedIn: 'root'
})
export class JmsTemplateService {

    messages = new Map();

    constructor() {
        this.messages.set(JmsMessageType.UserDefinition, '<?xml version="1.0"?><CDSEntitlements> <Commands><Command Action="{action}" BatchMessage="LAST"><UserDefinition UserIntId="{id}"></UserDefinition></Command> </Commands></CDSEntitlements>');
        this.messages.set(JmsMessageType.UserEntitlement, '<UserEntitlement att="val"><foo><bar>foobar</bar></foo></UserEntitlement>');
    }


    generateMessage(messagType: JmsMessageType, action: string, messageKeys: string[]): string[] {
        const payload = [];

        messageKeys.forEach((key) => {
            let messageTemplate = this.messages.get(JmsMessageType[messagType]);
            messageTemplate = messageTemplate.replace('{action}', action).replace('{id}', key);
            const doc = create(messageTemplate);
            const xml = doc.end({prettyPrint: true});
            payload.push(xml);
        });

        return payload;
    }

}
