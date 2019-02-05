import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Projects } from '../_models';


@Injectable({
  providedIn: 'root'
})
export class AddprojectService {

  projects_list: Projects[];

  constructor(private http: HttpClient) {

  }
  getAllProjects() {
    if (localStorage.getItem('projects_list') === null) {
      this.projects_list = [];
    } else {
      this.projects_list = JSON.parse(localStorage.getItem('projects_list'));
    }
    return this.projects_list;
  }


  deleteProject(id) {
    this.projects_list = this.getAllProjects();
    var mylist = this.projects_list;
    id = id - 1;
    let updatedlist: any;
    updatedlist = mylist[id];
    var index = mylist.indexOf(updatedlist)
    if (index > -1 || index != null) {
      mylist.splice(index, 1);
    }
    localStorage.setItem('projects_list', JSON.stringify(mylist));
  }


  addProject(myproject) {
    var i = 1;
    let project = this.getAllProjects();
    if (project != null) {
      for (var j = 0; j < project.length; j++) {
        if (project[j].id == (project.length + 1)) {
          i = project[j].id + 1;
          console.log(project[j].id, i, project.length + 1)
        }
        else {
          i = project.length + 1;
        }

      }
    }
    myproject.id = i;
    let addpr = {
      'id': myproject.id,
      'pcode': myproject.pcode,
      'pname': myproject.pname

    }

    if (project.length > 0) {
      project.push(addpr)
      localStorage.setItem('projects_list', JSON.stringify(project));
    }
    else {
      this.projects_list.push(addpr);
      localStorage.setItem('projects_list', JSON.stringify(project));
    }
  }

  getProjectbyId(mid) {
    let myid = this.getAllProjects();
    if (myid != null) {
      mid = mid - 1;
      return myid[mid];
    }
    }

    updateProject(editedlist) {
      this.projects_list = this.getAllProjects();
      var mylist = this.projects_list;
      let id = editedlist.id - 1;
      let updatedlist: any;
      updatedlist = mylist[id];
      var index = mylist.indexOf(updatedlist)
      if (index > -1 || index != null) {
        mylist.splice(index, 1);
      }
      mylist.push(editedlist)
      localStorage.setItem('projects_list', JSON.stringify(mylist));
    }


}
