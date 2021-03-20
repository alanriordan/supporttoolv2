import {Injectable} from '@angular/core';
import {mockCvMessages} from '../mock/mock-cv-messages';
import {Observable, of} from 'rxjs';
import {CvMessageApi} from '../model/cv-message';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EnvService} from '../../service/env.service';

@Injectable({
    providedIn: 'root'
})
export class CvService {

    constructor(private http: HttpClient, private envService: EnvService) {
    }

    getCvMessages(sort: string, order: string, page: number, filterText: string): Observable<CvMessageApi> {
        /*const ldapUrl = '';
           const options = {params: new HttpParams().set('env', this.envService.getEnvStr()).set('filterText', filterText)};
           const url = 'http://test.com';
           return this.http.get<CvMessageApi>(url, options);*/
      /*  const href = 'https://api.github.com/search/issues';
        const requestUrl =
            `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

        return this._httpClient.get<GithubApi>(requestUrl); */
        return of(mockCvMessages);
    }

    sendCvMessage(message: string): void {
        const options = {params: new HttpParams().set('env', this.envService.getEnv().toString())};
        const url = 'http://test.com';
        this.http.post(url, options);
    }
}
