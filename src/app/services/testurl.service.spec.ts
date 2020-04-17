import { TestBed } from '@angular/core/testing';

import { TesturlService } from './testurl.service';

describe('TesturlService', () => {
  let service: TesturlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesturlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
