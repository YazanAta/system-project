import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuventusComponent } from './juventus.component';

describe('JuventusComponent', () => {
  let component: JuventusComponent;
  let fixture: ComponentFixture<JuventusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuventusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuventusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
