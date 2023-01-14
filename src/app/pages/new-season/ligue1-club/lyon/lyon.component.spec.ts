import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyonComponent } from './lyon.component';

describe('LyonComponent', () => {
  let component: LyonComponent;
  let fixture: ComponentFixture<LyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
