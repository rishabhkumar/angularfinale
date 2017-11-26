import { TestBed, inject } from '@angular/core/testing';

import { GetblogsService } from './getblogs.service';

describe('GetblogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetblogsService]
    });
  });

  it('should be created', inject([GetblogsService], (service: GetblogsService) => {
    expect(service).toBeTruthy();
  }));
});
