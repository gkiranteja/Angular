import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AddprojectService } from '../_services/addproject.service'
import { Projects } from '../_models';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css'],

})

export class AddProjectsComponent implements OnInit {
  submitted = false;
  projectform: FormGroup;
  projectslistf: any;
  mylist: any;
  myprojects: any;
  tittle: string;
  constructor(private FormBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private AddprojectService: AddprojectService) { }

  ngOnInit() {
    this.projectform = this.FormBuilder.group({
      pcode: ['', Validators.required],
      pname: ['', Validators.required]
    })
    this.tittle = 'Add Project';
  }
  get f() { return this.projectform.controls; }

  onSubmit() {
    this.submitted = true;
    var i = 1;
    let pr = {
      'id': i,
      'pcode': this.f.pcode.value,
      'pname': this.f.pname.value
    }
    this.AddprojectService.addProject(pr);
    //this.router.navigate(['list']);

  }

}
