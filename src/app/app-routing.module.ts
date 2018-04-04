import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {RiskListComponent} from './risk/risk-list.component';
import {RiskNewComponent} from './risk/risk-new.component';
import {RiskShowComponent} from './risk/risk-show.component';

const routes: Routes = [

  {path: 'risks', component: RiskListComponent },
  {path: 'risks/new', component: RiskNewComponent},
  {path: 'risk/:id', component: RiskShowComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
