import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    public employees: any;
    public errorMsg;
  
    constructor(private _employeeservice: EmployeeService){ }
    
    ngOnInit(){
       this._employeeservice.getData()
            .subscribe(data => this.employees = data,
                       error => this.errorMsg = error
                       );
    }

}
