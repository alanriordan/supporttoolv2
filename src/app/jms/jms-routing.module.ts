import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JmsListenerComponent} from './jms-listener/jms-listener.component';
import {JmsSenderComponent} from './jms-sender/jms-sender.component';
import {JmsBrowserComponent} from './jms-browser/jms-browser.component';

const routes: Routes = [
  {path: 'jms-listener', component: JmsListenerComponent},
  {path: 'jms-sender', component: JmsSenderComponent},
  {path: 'jms-browser', component: JmsBrowserComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JmsRoutingModule { }
