import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
    
  }

   aboutOneHandler(){
    this._router.navigate(['child-one'], {relativeTo: this._router});
  }

}
