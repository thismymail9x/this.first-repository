import { TestBed } from '@angular/core/testing';

import { NomalService } from './nomal.service';

describe('NomalService', () => {
  let service: NomalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
