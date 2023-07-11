
import { TestBed } from '@angular/core/testing';

import { AZ_TR_ROLESService } from './AZ_TR_ROLES.service';

describe('AZ_TR_ROLESService', () => {
  let service: AZ_TR_ROLESService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TR_ROLESService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});