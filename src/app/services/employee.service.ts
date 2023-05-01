import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private db: AngularFirestore
  ) { }

  saveEmployeeHours(employee: Employee): any {
    this.db.collection('employee-hours').add(employee);
}


getEmployeeHoursByDepartment(departmentId: string): Observable<Employee[]> {
  const filteredEmployees = this.db.collection<Employee>('employee-hours', ref => ref.where('departmentId', '==', departmentId));
  return filteredEmployees.snapshotChanges().pipe(
      map((items: DocumentChangeAction<Employee>[]): Employee[] => {
          return items.map((item: DocumentChangeAction<Employee>): Employee => {
              const data = item.payload.doc.data();
              return {
                  id: item.payload.doc.id,
                  departmentId: data.departmentId,
                  name: data.name,
                  payRate: data.payRate,
                  monday: data.monday,
                  tuesday: data.tuesday,
                  wednesday: data.wednesday,
                  thursday: data.thursday,
                  friday: data.friday,
                  saturday: data.saturday,
                  sunday: data.sunday,
              };
          });
      })
  );
}



updateEmployeeHours(employee: Employee): any {
  this.db.collection('employee-hours').doc(employee.id).set(employee);
}

deleteEmployeeHours(employee: Employee): any {
  this.db.collection('employee-hours').doc(employee.id).delete();
}

}
