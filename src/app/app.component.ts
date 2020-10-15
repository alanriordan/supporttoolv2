import {Component, VERSION, ViewEncapsulation} from '@angular/core';

import {NavItem} from './navigation/nav-item';
import {navItems} from './navigation/nav-data';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    version = VERSION;
    navItems = navItems;
    env;
}
