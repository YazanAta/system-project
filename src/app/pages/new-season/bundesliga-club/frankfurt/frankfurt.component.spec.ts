import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankfurtComponent } from './frankfurt.component';

describe('FrankfurtComponent', () => {
  let component: FrankfurtComponent;
  let fixture: ComponentFixture<FrankfurtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrankfurtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrankfurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
