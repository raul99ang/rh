
import { TestBed } from '@angular/core/testing';

import { AZ_TR_USUARIOService } from './AZ_TR_USUARIO.service';

describe('AZ_TR_USUARIOService', () => {
  let service: AZ_TR_USUARIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TR_USUARIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});