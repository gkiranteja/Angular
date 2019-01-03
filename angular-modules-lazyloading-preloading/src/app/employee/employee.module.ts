import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee.routing';
 
import { EmployeeComponent } from './employee/employee.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module.module';

@NgModule({
  declarations: [
    EmployeeComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    EmployeeRoutingModule,
    SharedModule
  ],
  exports: [
    CreateComponent
  ]
})
export class EmployeeModule { }
