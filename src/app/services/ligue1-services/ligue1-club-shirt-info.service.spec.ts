import { TestBed } from '@angular/core/testing';

import { Ligue1ClubShirtInfoService } from './ligue1-club-shirt-info.service';

describe('Ligue1ClubShirtInfoService', () => {
  let service: Ligue1ClubShirtInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ligue1ClubShirtInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
