import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmadridComponent } from './realmadrid.component';

describe('RealmadridComponent', () => {
  let component: RealmadridComponent;
  let fixture: ComponentFixture<RealmadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealmadridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealmadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
