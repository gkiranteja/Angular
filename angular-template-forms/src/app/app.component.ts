import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public _UserService: UserService){}

  title = 'angular-template-forms';

  topicHasClass = true;

  courses:any = ['UI developer', 'dotNet developer', 'Java developer'];

  userModel = new User('', 'kiranteja@gmail.com', '9441162110', 'default', 'male', 'true');

  validateCourse(value){
      if(value === 'default'){
        this.topicHasClass = true;
      }
      else{
        this.topicHasClass = false;
      }
  }

  onSubmit(){
    console.log(this.userModel);
    this._UserService.postData(this.userModel)
        .subscribe(
           data => console.log('Success', data),
           error => console.log('error', error)
        )
  }

}
