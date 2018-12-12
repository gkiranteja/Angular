import { Component } from '@angular/core';
import { EmployeService } from './employe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employees = [];
  
    constructor( private employeeService : EmployeService){ }

    ngOnInit(){
        this.employeeService.getData()
            .subscribe(data => this.employees = data);
    }


    p: number = 1;
    collection: any[]; 

}
