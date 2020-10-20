import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxDemoComponent } from './box-demo/box-demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'box-demo', component: BoxDemoComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
