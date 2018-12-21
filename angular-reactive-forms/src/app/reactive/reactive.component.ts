import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators , FormGroup, FormArray} from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator'; 

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm: FormGroup;
  submitted = false;

  get firstName(){
    return this.profileForm.get('fname');
  }
  get lastName(){
    return this.profileForm.get('lname');
  }
  get email(){
    return this.profileForm.get('email');
  }
  get password(){
    return this.profileForm.get('pwd');
  }
  get confirmPassword(){
    return this.profileForm.get('cpwd');
  }
  get remember(){
    return this.profileForm.get('remember');
  }
  get selectDesignation(){
    return this.profileForm.get('selectDesignation');
  }
  get state(){
    return this.profileForm.get('state');
  }
  get city(){
    return this.profileForm.get('city');
  }
  get alternativePhone(){
    return this.profileForm.get('alternativePhone') as FormArray;
  }

  addAlternativePhone(){
     this.alternativePhone.push(this.fb.control(''));
  }

  

  submitData(){
     this.submitted = true;

     
     // stop here if form is invalid
        if (this.profileForm.invalid) {
           // alert("fill");
            return;
        }

        alert('SUCCESS!! :-)');
       // console.log(this.profileForm.value);
  }

  update(){
     this.profileForm.patchValue({
         lname: 'teja',
         address: {
            state: 'telangana'
         }
     });
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
      cpwd: ['', [Validators.required]],
      comment: [''],
      remember: ['', Validators.required],
      selectDesignation: ['', [Validators.required]],
      address: this.fb.group({
        state: ['', [Validators.required]],
        city: ['', [Validators.required]]
      }),
      phone: [''],
      alternativePhone: this.fb.array([])

  }, {validator: PasswordValidator});
  }

}
