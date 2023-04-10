import { TestBed } from '@angular/core/testing';

import { CdSeriesMapService } from './cd-series-map.service';

describe('CdSeriesMapService', () => {
  let service: CdSeriesMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdSeriesMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
