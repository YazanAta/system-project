import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MancityComponent } from './mancity.component';

describe('MancityComponent', () => {
  let component: MancityComponent;
  let fixture: ComponentFixture<MancityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MancityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MancityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
