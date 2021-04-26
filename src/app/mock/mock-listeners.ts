import {JmsListener} from '../jms/jms-listener';
import {JmsQueueType} from '../common/jms-queue-type.enum';
import {JmsQueueStatus} from '../common/jms-queue-status.enum';

export const mockListener: JmsListener[] = [
    new JmsListener(JmsQueueType.BROKER, JmsQueueStatus.RUNNING),
    new JmsListener(JmsQueueType.BROKER1, JmsQueueStatus.RUNNING),
    new JmsListener(JmsQueueType.BROKER_EXP, JmsQueueStatus.STOPPED)
];
