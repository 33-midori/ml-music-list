import { TestBed } from '@angular/core/testing';

import { CdSeriesListService } from './cd-series-list.service';

describe('CdSeriesListService', () => {
  let service: CdSeriesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdSeriesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
