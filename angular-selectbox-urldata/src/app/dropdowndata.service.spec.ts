import { TestBed } from '@angular/core/testing';

import { DropdowndataService } from './dropdowndata.service';

describe('DropdowndataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropdowndataService = TestBed.get(DropdowndataService);
    expect(service).toBeTruthy();
  });
});
