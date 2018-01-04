import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent }         from './app.component';

import { AppRoutingModule }     from './app-routing.module';
import { AidashboardComponent } from './aidashboard/aidashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule
  ],
  exports:[
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [
    AppComponent,
    AidashboardComponent,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }