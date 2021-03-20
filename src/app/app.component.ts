import {Component, OnInit, VERSION, ViewEncapsulation} from '@angular/core';
import {navItems} from './navigation/nav-data';
import {EnvService} from './service/env.service';
import {Env} from './common/env.enum';
import {JmsService} from './jms/service/jms.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    version = VERSION;
    navItems = navItems;
    env: string;
    envs = [];

    constructor(private envService: EnvService, private jmsService: JmsService) {

    }

    setEnv(env: Env): void {
        this.envService.setEnv(env);
    }

    ngOnInit(): void {
        for (const env in Env) {
            if (isNaN(Number(env))) {
                this.envs.push(env);
            }
        }
        this.envService.setEnv(Env.SIT);
        this.env = Env[Env.SIT];
    }
}
