import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallsPageComponent } from './balls-page.component';

describe('BallsPageComponent', () => {
  let component: BallsPageComponent;
  let fixture: ComponentFixture<BallsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
