import { TestBed } from '@angular/core/testing';

import { Mp3Service } from './mp3.service';

describe('Mp3Service', () => {
  let service: Mp3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mp3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
