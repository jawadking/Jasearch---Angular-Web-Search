import { TestBed, inject } from '@angular/core/testing';

import { JaresultGuardService } from './jaresult-guard.service';

describe('JaresultGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JaresultGuardService]
    });
  });

  it('should be created', inject([JaresultGuardService], (service: JaresultGuardService) => {
    expect(service).toBeTruthy();
  }));
});
