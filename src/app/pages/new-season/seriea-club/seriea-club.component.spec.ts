import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieaClubComponent } from './seriea-club.component';

describe('SerieaClubComponent', () => {
  let component: SerieaClubComponent;
  let fixture: ComponentFixture<SerieaClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieaClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieaClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
