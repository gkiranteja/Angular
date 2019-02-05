import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Employee } from '../_models';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  emp_list: Employee[];

  constructor(private http: HttpClient) {

  }
  getAllEmployees() {
    if (localStorage.getItem('emp_list') === null) {
      this.emp_list = [];
    } else {
      this.emp_list = JSON.parse(localStorage.getItem('emp_list'));
    }
    return this.emp_list;
  }


  deleteEmp(id) {
    this.emp_list = this.getAllEmployees();
    var mylist = this.emp_list;
    id = id - 1;
    let updatedlist: any;
    updatedlist = mylist[id];
    var index = mylist.indexOf(updatedlist)
    if (index > -1 || index != null) {
      mylist.splice(index, 1);
    }
    localStorage.setItem('emp_list', JSON.stringify(mylist));
  }


  addEmployee(myproject) {
    var i = 1;
    let project = this.getAllEmployees();
    if (project != null) {
      for (var j = 0; j < project.length; j++) {
        if (project[j].id == (project.length + 1)) {
          i = project[j].id + 1;
        }
        else {
          i = project.length + 1;
        }

      }
    }
    myproject.id = i;
    let addemp = {
      'id': myproject.id,
      'empcode': myproject.empcode,
      'empname': myproject.empname

    }

    if (project.length > 0) {
      project.push(addemp)
      localStorage.setItem('emp_list', JSON.stringify(project));
    }
    else {
      this.emp_list.push(addemp);
      localStorage.setItem('emp_list', JSON.stringify(project));
    }
  }

  getProjectbyId(mid) {
    let myid = this.getAllEmployees();
    if (myid != null) {
      mid = mid - 1;
      return myid[mid];
    }
    }

    updateProject(editedlist) {
      this.emp_list = this.getAllEmployees();
      var mylist = this.emp_list;
      let id = editedlist.id - 1;
      let updatedlist: any;
      updatedlist = mylist[id];
      var index = mylist.indexOf(updatedlist)
      if (index > -1 || index != null) {
        mylist.splice(index, 1);
      }
      mylist.push(editedlist)
      localStorage.setItem('emp_list', JSON.stringify(mylist));
    }


}
