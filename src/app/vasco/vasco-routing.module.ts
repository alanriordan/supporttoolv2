import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VascoInfoComponent} from './vasco-info/vasco-info.component';


const routes: Routes = [
  {path: 'vasco-info', component: VascoInfoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class VascoRoutingModule { }
