import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CvMessageComponent} from './cv-message/cv-message.component';

const routes: Routes = [
  {path: 'cv-message', component: CvMessageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CvRoutingModule { }
