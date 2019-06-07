import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyUsComponent } from './privacy-us.component';

describe('PrivacyUsComponent', () => {
  let component: PrivacyUsComponent;
  let fixture: ComponentFixture<PrivacyUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
