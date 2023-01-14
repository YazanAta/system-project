import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeipzigComponent } from './leipzig.component';

describe('LeipzigComponent', () => {
  let component: LeipzigComponent;
  let fixture: ComponentFixture<LeipzigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeipzigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeipzigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
