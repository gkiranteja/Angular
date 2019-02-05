import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service'
import { Employee } from '../_models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-getemployees',
  templateUrl: './getemployees.component.html',
  styleUrls: ['./getemployees.component.css']
})

export class GetemployeesComponent implements OnInit {

  employees: any;
  emplist = [];
  tittle: string;
  page = [];
  totalpages = [];
  perpage = 2;
  pagenumbers = [];
  public id: string;
  z:any;

  constructor(private EmployeeService: EmployeeService,private route: ActivatedRoute, private router: Router) { }
  
  
  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.pagination(0);
    this.tittle = 'Employees List';
  }

  
  /*getEmps() {
    this.emplist = this.EmployeeService.getAllEmployees();
    this.employees.push(this.emplist);
    this.pagination();
  }*/
  paging(id){
     this.pagination(id);
  }

pagination(id){
this.employees = this.EmployeeService.getAllEmployees();
//this.employees.push(this.emplist);
let pagelen = (this.employees.length)/this.perpage;
let pageid:any;
pageid = id;
console.log('pageid',pageid);
var start = pageid * this.perpage;
var d  = this.employees.slice(start,start + 2);
this.emplist = d;
console.log(pageid, start);
var x = []
 for(var i = 0; i < pagelen; i++){
    x.push(i);
}

this.pagenumbers = JSON.parse(JSON.stringify(x));
this.z = this.pagenumbers;
//this.totalpages.push(this.page);
console.log(this.z)

}

  deleteEmps(id) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.EmployeeService.deleteEmp(id);
      this.emplist = this.EmployeeService.getAllEmployees();
      this.employees.push(this.emplist);
    }
}


}