import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EnvService} from '../../service/env.service';
import {LdapDetails} from '../model/ldap-details';
import {Observable, of} from 'rxjs';
import {ldapDetails} from '../mock/mock-ldap-details';

@Injectable({
    providedIn: 'root'
})
export class LdapService {

    constructor(private http: HttpClient, private envService: EnvService) {
    }

    getLdapDetails(userId: string): Observable<LdapDetails> {
        /*const ldapUrl = '';
        const options = {params: new HttpParams().set('env', this.envService.getEnvStr()).set('userId', userId)};
        const url = 'http://test.com';
        return this.http.get<LdapDetails>(url, options);*/

        return of(ldapDetails);
    }
}
