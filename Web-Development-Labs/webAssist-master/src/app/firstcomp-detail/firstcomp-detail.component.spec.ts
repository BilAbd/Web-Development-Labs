import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcompDetailComponent } from './firstcomp-detail.component';

describe('FirstcompDetailComponent', () => {
  let component: FirstcompDetailComponent;
  let fixture: ComponentFixture<FirstcompDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcompDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcompDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
