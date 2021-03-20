import {Component, OnInit} from '@angular/core';
import {JmsService} from '../service/jms.service';
import {JmsMessage} from '../jms-message';
import {of} from 'rxjs';
import {mockMessages} from '../../mock/mock-messages';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
    selector: 'app-jms-browser',
    templateUrl: './jms-browser.component.html',
    styleUrls: ['./jms-browser.component.css']
})
export class JmsBrowserComponent implements OnInit {

    queues: string[];
    selectedQueue: string;
    messages: JmsMessage[];

    displayedColumns: string[] = ['select', 'id', 'message'];
    dataSource = new MatTableDataSource<JmsMessage>(mockMessages);
    selection = new SelectionModel<JmsMessage>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: JmsMessage): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }

    constructor(private jmsService: JmsService) {
    }

    ngOnInit(): void {
        this.jmsService.getQueues().subscribe(data => {
            this.queues = data;
        });
    }

    /*retrieveMessage(): void {
      this.jmsService.getMessages(this.selectedQueue).subscribe({
        next: value => {
          this.messages = value;
        },
        error: err => {
          console.log('Error retrieving messages');
        }
      });
    }*/

    retrieveMessage(): void {
        this.messages = mockMessages;
    }
}
