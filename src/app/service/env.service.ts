import {Injectable} from '@angular/core';
import {Env} from '../common/env.enum';

@Injectable({
    providedIn: 'root'
})
export class EnvService {

    selectedEnv: Env;

    constructor() {
    }

    setEnv(env: Env): void {
        this.selectedEnv = env;
    }

    getEnv(): Env {
        return this.selectedEnv;
    }
}
