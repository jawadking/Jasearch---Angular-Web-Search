import { TestBed, inject } from '@angular/core/testing';

import { JasearchService } from './jasearch.service';

describe('JasearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JasearchService]
    });
  });

  it('should be created', inject([JasearchService], (service: JasearchService) => {
    expect(service).toBeTruthy();
  }));
});
