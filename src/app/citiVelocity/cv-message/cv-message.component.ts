import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CvService} from "../service/cv.service";
import {CvMessage} from "../model/cv-message";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {merge, of} from "rxjs";
import {catchError, map, startWith, switchMap} from "rxjs/operators";

@Component({
    selector: 'app-cv-message',
    templateUrl: './cv-message.component.html',
    styleUrls: ['./cv-message.component.css']
})
export class CvMessageComponent implements OnInit, AfterViewInit {
    filterText: string;
    cvMessages: CvMessage[];
    displayedColumns: string[] = ['Message', 'Response', 'Action', 'sent'];

    data: CvMessage[] = [];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private cvService: CvService) {
    }

    ngOnInit(): void {
    }

    findCvMessage(filterText: string): void {
        this.cvService.getCvMessages('', '', 0, filterText).subscribe(data => {
            this.cvMessages = data.items;
        });
    }

    resendCvMessage(message: string): void {
        console.log(message);
    }

    ngAfterViewInit(): void {
        // this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.cvService!.getCvMessages(
                        this.sort.active, this.sort.direction, this.paginator.pageIndex, this.filterText);
                }),
                map(data => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = false;
                    this.resultsLength = data.total_count;

                    return data.items;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    // Catch if the GitHub API has reached its rate limit. Return empty data.
                    this.isRateLimitReached = true;
                    return of([]);
                })
            ).subscribe(data => this.data = data);
    }

}
