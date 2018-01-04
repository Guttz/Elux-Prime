import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControladoriaDashComponent }   from './controladoria-dash/controladoria-dash.component';
import { ExtractFormComponent }   from './extract-form/extract-form.component';
import { DashboardComponent }   from './dashboard.component';

const dashRoutes: Routes = [
	{
    path: '',
    component: DashboardComponent,
    children: [
    { path: '', redirectTo: '/dashboard/controladoriaDash', pathMatch: 'full' },
	  { path: 'controladoriaDash', component: ControladoriaDashComponent },
	  { path: 'extractForm', component: ExtractFormComponent },
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
