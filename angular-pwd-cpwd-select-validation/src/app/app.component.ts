import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordConfirm } from './custom_validation/password.validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   constructor(private fb: FormBuilder){}

   get password(){
      return this.customValidation.get('pwd');
   }
   get confirmPassword(){
      return this.customValidation.get('cpwd');
   }

   customValidation = this.fb.group({
       pwd: ['', [Validators.required, Validators.minLength(4)]],
       cpwd: ['']
   }, {Validators: PasswordConfirm})

   formData(){
     console.log(this.customValidation.value);
   }

}
