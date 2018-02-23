import {Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee.model';
import {ServiceService} from '../shared/service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList:Employee[];
  constructor(private employeeService: ServiceService) { 
    
  }

  //get data on init of this component
  ngOnInit() {
    var x = this.employeeService.getData();
    console.log(x);
    x.snapshotChanges().subscribe(
      item => {
        this.employeeList=[];
        item.forEach(Element =>{
          var y = Element.payload.toJSON();
          y["$key"]=Element.key;
          this.employeeList.push(y as Employee);
        })
      }
    );
  }

  //on click of any item, open that object
  onItemClick(emp: Employee){
    this.employeeService.selectedEmployee = Object.assign({},emp);
  }
}
