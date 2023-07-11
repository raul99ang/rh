
import { TestBed } from '@angular/core/testing';

import { AZ_TR_MODULO_ACCIONService } from './AZ_TR_MODULO_ACCION.service';

describe('AZ_TR_MODULO_ACCIONService', () => {
  let service: AZ_TR_MODULO_ACCIONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TR_MODULO_ACCIONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});