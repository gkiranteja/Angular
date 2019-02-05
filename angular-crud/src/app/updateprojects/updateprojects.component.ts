import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { AddprojectService } from '../_services/addproject.service'

@Component({
  selector: 'app-updateprojects',
  templateUrl: './updateprojects.component.html',
  styleUrls: ['./updateprojects.component.css']
})

export class UpdateprojectsComponent implements OnInit {

  submitted = false;
  projectform: FormGroup;
  projectslistf: any;
  mylist = [];
  myprojects: any;
  public id: string;
  tittle: string;

  constructor(private FormBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private AddprojectService: AddprojectService) {

  }

  ngOnInit() {
    this.projectform = this.FormBuilder.group({
      updateid: ['', Validators.required],
      pcode: ['', Validators.required],
      pname: ['', Validators.required]
    })

    this.id = this.route.snapshot.paramMap.get('id');
    this.getProjectsbyId(this.id)
    this.tittle = 'Edit Project';

  }

  get f() { return this.projectform.controls; }

  getProjectsbyId(mid) {
      this.myprojects = this.AddprojectService.getProjectbyId(mid);;
      this.f.pcode.setValue(this.myprojects.pcode);
      this.f.pname.setValue(this.myprojects.pname);
      this.f.updateid.setValue(this.myprojects.id);
  }

  onSubmit() {
    this.submitted = true;
    let pr = {
      'id': this.f.updateid.value,
      'pcode': this.f.pcode.value,
      'pname': this.f.pname.value
    }
    this.AddprojectService.updateProject(pr);
    this.router.navigate(['/list']);
  }

}
