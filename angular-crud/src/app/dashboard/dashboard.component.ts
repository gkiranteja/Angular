import { Component, OnInit } from '@angular/core';

import { GetprojectsComponent } from '../getprojects/getprojects.component';
import { GetemployeesComponent } from '../getemployees/getemployees.component';
import { AssignprojectComponent } from '../assignproject/assignproject.component';
import { EmployeeService } from '../_services/employee.service'
import { AddprojectService } from '../_services/addproject.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  emplist = [];
  prjlist:any;

  constructor(private EmployeeService: EmployeeService,private AddprojectService: AddprojectService) { }

  ngOnInit() {
this.getEmps();
  }

getEmps() {
    this.emplist = this.EmployeeService.getAllEmployees();
    this.prjlist = this.AddprojectService.getAllProjects();

  }

}
