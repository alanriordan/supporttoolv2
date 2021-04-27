import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EnvService} from '../../service/env.service';
import {VascoDetails} from '../model/vasco-details';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VascoService {

  constructor(private http: HttpClient, private envService: EnvService) {
  }

  getTokenDetails(serialNumber: string): Observable<VascoDetails>{
        const options = {params: new HttpParams().set('env', this.envService.getEnvStr()).set('serialNumber', serialNumber)};
        const url = 'http://test.com';
        return this.http.get<VascoDetails>(url, options);
        return of();
  }



}
