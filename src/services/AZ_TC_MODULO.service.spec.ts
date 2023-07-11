
import { TestBed } from '@angular/core/testing';

import { AZ_TC_MODULOService } from './AZ_TC_MODULO.service';

describe('AZ_TC_MODULOService', () => {
  let service: AZ_TC_MODULOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TC_MODULOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});