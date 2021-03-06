import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RiskListComponent} from './risk/risk-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RiskNewComponent } from './risk/risk-new.component';
import { RiskShowComponent } from './risk/risk-show.component';

@NgModule({
  declarations: [
    AppComponent,
    RiskListComponent,
    RiskNewComponent,
    RiskShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
