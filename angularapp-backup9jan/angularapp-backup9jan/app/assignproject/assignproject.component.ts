import { Component, OnInit } from '@angular/core';
import { AddprojectService } from '../_services/addproject.service'
import { EmployeeService } from '../_services/employee.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignproject',
  templateUrl: './assignproject.component.html',
  styleUrls: ['./assignproject.component.css']
})

export class AssignprojectComponent implements OnInit {

 myprojects = [];
  mylist: any;;
  employees = [];
  emplist: any;;
  tittle: string;
  projectform: FormGroup;

  constructor(private FormBuilder: FormBuilder, private EmployeeService: EmployeeService, private AddprojectService: AddprojectService) { }

  ngOnInit() {
    this.getProjects();
    this.getEmps();
  

this.projectform = this.FormBuilder.group({
      pname: ['', Validators.required],
      empname: ['', Validators.required]
    })
    this.tittle = 'Assign Project';
  }
  get f() { return this.projectform.controls; }

getProjects() {
    this.mylist = this.AddprojectService.getAllProjects();
    this.myprojects.push(this.mylist);
  }

  getEmps() {
    this.emplist = this.EmployeeService.getAllEmployees();
    this.employees.push(this.emplist);
  }
onSubmit() {
}

}
