import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {JmsMessage} from '../jms-message';
import {mockListener} from '../../mock/mock-listeners';
import {JmsListener} from '../jms-listener';
import {JmsQueueStatus} from '../../common/jms-queue-status.enum';

@Component({
  selector: 'app-jms-listener',
  templateUrl: './jms-listener.component.html',
  styleUrls: ['./jms-listener.component.css']
})
export class JmsListenerComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['queue', 'status', 'action'];
  dataSource = new MatTableDataSource<JmsListener>(mockListener);

  ngOnInit(): void {
  }

    refreshListeners(): void {

    }

  getJmsStatus(status: number): string {
    return JmsQueueStatus[status];
  }

  actionListener(queue: string, status: number): void {
    console.log(queue);
    console.log(status);
  }
}
