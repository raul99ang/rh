
import { TestBed } from '@angular/core/testing';

import { AZ_TR_MENUService } from './AZ_TR_MENU.service';

describe('AZ_TR_MENUService', () => {
  let service: AZ_TR_MENUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AZ_TR_MENUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});