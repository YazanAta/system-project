import { TestBed } from '@angular/core/testing';

import { ClassicsService } from './classics.service';

describe('ClassicsService', () => {
  let service: ClassicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
