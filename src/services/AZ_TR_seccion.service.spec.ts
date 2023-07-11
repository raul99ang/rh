
import { TestBed } from '@angular/core/testing';

import { AZ_TR_seccionService } from './AZ_TR_seccion.service';

describe('AZ_TR_seccionService', () => {
  let service: AZ_TR_seccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TR_seccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});