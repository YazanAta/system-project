import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapoliComponent } from './napoli.component';

describe('NapoliComponent', () => {
  let component: NapoliComponent;
  let fixture: ComponentFixture<NapoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
