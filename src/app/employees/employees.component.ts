import {Component,OnInit} from '@angular/core';
import {ServiceService} from './shared/service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [ServiceService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: ServiceService) { 
    
  }

  ngOnInit() {
    
  }
}
