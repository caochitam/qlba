import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthYearComponent } from './birth-year.component';

describe('BirthYearComponent', () => {
  let component: BirthYearComponent;
  let fixture: ComponentFixture<BirthYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
