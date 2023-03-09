import { TestBed } from '@angular/core/testing';

import { DisplayFetchService } from './display-fetch.service';

describe('DisplayFetchService', () => {
  let service: DisplayFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
