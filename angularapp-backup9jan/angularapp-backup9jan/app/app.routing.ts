import { Routes, RouterModule } from '@angular/router';

import { AddProjectsComponent } from './add-projects/add-projects.component';
import { GetprojectsComponent } from './getprojects/getprojects.component'
import { UpdateprojectsComponent } from './updateprojects/updateprojects.component'
import { AddEmployeeComponent } from './add-employee/add-employee.component'; 
import { GetemployeesComponent } from './getemployees/getemployees.component'; 
import { AssignprojectComponent } from './assignproject/assignproject.component'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 

const projectroutes: Routes =[
{path: '', component:DashboardComponent},
{path: 'projects', component:AddProjectsComponent},
{path: 'viewprojects', component:GetprojectsComponent},
{path: 'emp', component:AddEmployeeComponent},
{path: 'assignpr', component:AssignprojectComponent},
{path: 'emplist', component:GetemployeesComponent},
{path: 'emplist/id/:id', component:GetemployeesComponent},
{path: 'edit/id/:id', component:UpdateprojectsComponent}
]

export const ProjectsRoute =  RouterModule.forRoot(projectroutes);