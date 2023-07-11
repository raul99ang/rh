
import { TestBed } from '@angular/core/testing';

import { AZ_TC_PERFILService } from './AZ_TC_PERFIL.service';

describe('AZ_TC_PERFILService', () => {
  let service: AZ_TC_PERFILService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TC_PERFILService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});