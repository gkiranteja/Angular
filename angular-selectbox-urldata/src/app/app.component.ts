import { Component } from '@angular/core';
import { DropdowndataService } from './dropdowndata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-selectbox-urldata';
  public selectData: any;

  selectDataaaa = ['one', 'two', 'three'];
  
  constructor(private _dropdowndataService: DropdowndataService){} 

  ngOnInit(){
      this._dropdowndataService.dropdownData()
          .subscribe(data => this.selectData = data);
         
  } 

}
