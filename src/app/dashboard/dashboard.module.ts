import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CalendarModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotdevelopedComponent }   from './notdeveloped/notdeveloped.component';

import { Routes, RouterModule } from '@angular/router';
import { ControladoriaDashComponent }   from './controladoria-dash/controladoria-dash.component';
import { ExtractFormComponent }   from './extract-form/extract-form.component';
import { DashboardComponent }   from './dashboard.component';


import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatDatepickerModule,
    CalendarModule,
    FormsModule,
  ],
  declarations: [
  ControladoriaDashComponent,
  ExtractFormComponent,
  DashboardComponent,
  NotdevelopedComponent]
})
export class DashboardModule { }
