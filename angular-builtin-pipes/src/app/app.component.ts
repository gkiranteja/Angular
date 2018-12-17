import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Testing App";

  public person = {
     "firstname" : "kiran",
     "lastname" : "teja"
  }

  public date = new Date();

}
