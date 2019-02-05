import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from '../_services/employee.service'
import { Employee } from '../_models';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  submitted = false;
  projectform: FormGroup;
  projectslistf: any;
  mylist: any;
  myprojects: any;
  tittle: string;
  constructor(private FormBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.projectform = this.FormBuilder.group({
      empcode: ['', Validators.required],
      empname: ['', Validators.required]
    })
    this.tittle = 'Add Employee';
  }
  get f() { return this.projectform.controls; }

  onSubmit() {
    this.submitted = true;
    var i = 1;
    let pr = {
      'id': i,
      'empcode': this.f.empcode.value,
      'empname': this.f.empname.value
    }
    this.EmployeeService.addEmployee(pr);
    //this.router.navigate(['list']);

  }

}
