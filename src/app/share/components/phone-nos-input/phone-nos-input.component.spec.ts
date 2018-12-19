import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNosInputComponent } from './phone-nos-input.component';

describe('PhoneNosInputComponent', () => {
  let component: PhoneNosInputComponent;
  let fixture: ComponentFixture<PhoneNosInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNosInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
