import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AddprojectService } from '../_services/addproject.service'
import { Projects } from '../_models';

@Component({
  selector: 'app-getprojects',
  templateUrl: './getprojects.component.html',
  styleUrls: ['./getprojects.component.css']
})

export class GetprojectsComponent implements OnInit {

  myprojects = [];
  mylist: any;;
  tittle: string;


  constructor(private AddprojectService: AddprojectService) { }

  ngOnInit() {
    this.getProjects();
    this.tittle = 'Projects List';
  }

  getProjects() {
    this.mylist = this.AddprojectService.getAllProjects();
    this.myprojects.push(this.mylist);
  }

  deleteproject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.AddprojectService.deleteProject(id);
      this.mylist = this.AddprojectService.getAllProjects();
      this.myprojects.push(this.mylist);
    }

  }



}
