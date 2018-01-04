import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControladoriaDashComponent }   from './controladoria-dash/controladoria-dash.component';
import { ExtractFormComponent }   from './extract-form/extract-form.component';
import { DashboardComponent }   from './dashboard.component';
import { NotdevelopedComponent }   from './notdeveloped/notdeveloped.component';

const dashRoutes: Routes = [
	{
    path: '',
    component: DashboardComponent,
    children: [

	  { path: '', component: ControladoriaDashComponent },
	  { path: 'extractForm', component: ExtractFormComponent },
    { path: 'notdev', component: NotdevelopedComponent },
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
