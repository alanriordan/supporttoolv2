import {JmsQueueType} from '../common/jms-queue-type.enum';
import {JmsQueueStatus} from '../common/jms-queue-status.enum';

export class JmsListener {

    constructor(public queue: JmsQueueType, public status: JmsQueueStatus) {
    }

}
