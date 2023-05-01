import { TestBed } from '@angular/core/testing';

import { DepartmentService } from './departments.service';

describe('DepartmentsService', () => {
  let service: DepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
