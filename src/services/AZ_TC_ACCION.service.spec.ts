
import { TestBed } from '@angular/core/testing';

import { AZ_TC_ACCIONService } from './AZ_TC_ACCION.service';

describe('AZ_TC_ACCIONService', () => {
  let service: AZ_TC_ACCIONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TC_ACCIONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});