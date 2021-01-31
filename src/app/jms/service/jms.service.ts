import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {Env} from '../../common/env.enum';
import {EnvService} from '../../service/env.service';
import {JmsMessage} from '../jms-message';


@Injectable({
    providedIn: 'root'
})
export class JmsService {

    jmsUrl = '';

    constructor(private http: HttpClient, private envService: EnvService) {
    }

    getQueues(): Observable<Array<string>> {
        return of(['CDS.APP.ENT', 'CDS.APP.CAIN', 'CDS.APP.GTM']);
    }

    sendMessage(queue: string, payload: string): void {
        const options = { params: new HttpParams().set('env', Env[this.envService.getEnv()]) };
        this.http.post<string>(this.jmsUrl, payload).subscribe({
            next: data => {
                console.log('Jms Data Sent');
            },
            error: err => {
                console.error('There was an error posting jms data');
            }
        });
    }

    getMessages(queue: string): Observable<JmsMessage[]> {
        const options = { params: new HttpParams().set('env', this.envService.getEnv().toString()) };
        const url = 'http://test.com';
        return this.http.get<JmsMessage[]>(url, options);
    }

}
