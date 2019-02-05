import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.employeeForm = this.fb.group({
        fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
        email: ['', [Validators.required]],
        skills: this.fb.group({
           skillName: ['', [Validators.required]],
           experienceInYears: ['', [Validators.required]],
           proficiency: ['', [Validators.required]]
        })
     });
  }

  logKeyValuePairs(group: FormGroup){
       Object.keys(group.controls).forEach((key: string) => {
         const abstractControl = group.get(key);
         if(abstractControl instanceof FormGroup){
            this.logKeyValuePairs(abstractControl)
            //abstractControl.disable();
         }
         else {
            //console.log('key = ' + key + ' value = ' + abstractControl.value );
            //abstractControl.disable();
            abstractControl.markAsDirty();
         }
       })
  }

  onLoadData(){
    // this.employeeForm.patchValue({
    //    fullName: 'kiranteja',
    //    email: 'kiran@gmail.com',
    //    skills: {
    //        skillName: 'UI',
    //        experienceInYears: 4,
    //        proficiency: 'beginner'
    //    }
    // })
    this.logKeyValuePairs(this.employeeForm);
  }

  onSubmit(): void {
     // this method is not return anything so return type is void
     console.log(this.employeeForm.touched);
     console.log(this.employeeForm.value);

     console.log(this.employeeForm.controls.fullName.touched);
     console.log(this.employeeForm.get('fullName').value);

  }

}
