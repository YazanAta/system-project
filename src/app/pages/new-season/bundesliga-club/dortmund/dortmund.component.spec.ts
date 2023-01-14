import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DortmundComponent } from './dortmund.component';

describe('DortmundComponent', () => {
  let component: DortmundComponent;
  let fixture: ComponentFixture<DortmundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DortmundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DortmundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
