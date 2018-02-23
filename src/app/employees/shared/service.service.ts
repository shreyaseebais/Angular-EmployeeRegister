import {Injectable} from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Employee} from './employee.model';

@Injectable()
export class ServiceService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) { 
    
  }
  ////////////////////////////////////     ///////      CRUD operations      ///////       /////////////////////////////////////////
  //Read
  getData(){
    this.employeeList = this.firebase.list('employees');
    console.log(this.employeeList);
    return this.employeeList;
  }
  //Create
  insertEmployee(employee:Employee){
    this.employeeList.push({
      name:employee.name,
      position:employee.position,
      office:employee.office,
      salary:employee.salary
    });
  }
  //Update
  updateEmployee(employee:Employee){
    this.employeeList.update(employee.$key, {
      name:employee.name,
      position:employee.position,
      office:employee.office,
      salary:employee.salary
    });
  }
  //Delete
  deleteEmployee(key:string){    
    this.employeeList.remove(key);
  }
}
