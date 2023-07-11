
import { TestBed } from '@angular/core/testing';

import { AZ_TR_PERMISO_PERFILService } from './AZ_TR_PERMISO_PERFIL.service';

describe('AZ_TR_PERMISO_PERFILService', () => {
  let service: AZ_TR_PERMISO_PERFILService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TR_PERMISO_PERFILService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});