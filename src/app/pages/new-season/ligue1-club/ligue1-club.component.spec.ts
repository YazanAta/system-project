import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligue1ClubComponent } from './ligue1-club.component';

describe('Ligue1ClubComponent', () => {
  let component: Ligue1ClubComponent;
  let fixture: ComponentFixture<Ligue1ClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ligue1ClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ligue1ClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
