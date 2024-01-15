import { TestBed } from '@angular/core/testing';

import { SortAndFiltersService } from './sort-and-filters.service';

describe('SortAndFiltersService', () => {
  let service: SortAndFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortAndFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
