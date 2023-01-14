import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterMilanComponent } from './inter-milan.component';

describe('InterMilanComponent', () => {
  let component: InterMilanComponent;
  let fixture: ComponentFixture<InterMilanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterMilanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterMilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
