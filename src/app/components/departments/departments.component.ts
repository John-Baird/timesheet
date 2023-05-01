import { Component } from '@angular/core';
import { Department } from 'src/app/interfaces/department'
import { Observable } from 'rxjs';
import { DepartmentService } from '../../services/departments.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
    departments: Department[] | undefined
    $departments: Observable<Department[]> | undefined;

    constructor(
      private departmentsService: DepartmentService,
      private router: Router
    ) {}
    ngOnInit(): void {
    //   this.departmentsService.getDepartments().subscribe(departments => {
    //     this.departments = departments;
    // }); 
    this.$departments = this.departmentsService.getDepartments();
    }
    goToDepartment(departmentId: string): void {
      this.router.navigate(['./timesheet', {id: departmentId}]);
  }
}
