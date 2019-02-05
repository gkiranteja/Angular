import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoute } from './app.routing';
import { GetprojectsComponent } from './getprojects/getprojects.component';
import { UpdateprojectsComponent } from './updateprojects/updateprojects.component'
import { AddprojectService } from './_services/addproject.service'
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { GetemployeesComponent } from './getemployees/getemployees.component';
import { AssignprojectComponent } from './assignproject/assignproject.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AddProjectsComponent,
    GetprojectsComponent,
    UpdateprojectsComponent,
    AddEmployeeComponent,
    GetemployeesComponent,
    AssignprojectComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ProjectsRoute,
    HttpClientModule
  ],
  providers: [AddprojectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
