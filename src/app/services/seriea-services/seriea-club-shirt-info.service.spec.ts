import { TestBed } from '@angular/core/testing';

import { SerieaClubShirtInfoService } from './seriea-club-shirt-info.service';

describe('SerieaClubShirtInfoService', () => {
  let service: SerieaClubShirtInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieaClubShirtInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
