import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

import { CustomPreloadingService } from './custom-preloading.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'employee', data: { preload: false }, loadChildren: './employee/employee.module#EmployeeModule' },
  { path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
