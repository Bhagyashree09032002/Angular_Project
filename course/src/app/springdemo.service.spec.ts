import { TestBed } from '@angular/core/testing';

import { SpringdemoService } from './springdemo.service';

describe('SpringdemoService', () => {
  let service: SpringdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
