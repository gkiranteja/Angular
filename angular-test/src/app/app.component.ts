import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms'
import { PasswordConfirm } from './setup/password.confirm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private fb: FormBuilder ){}
  
  passwordComfirm= this.fb.group({
     pwd: [''],
     cpwd: ['']
  }, {validator: PasswordConfirm});

  formData(){
     console.log(this.passwordComfirm.value);
  }

}
