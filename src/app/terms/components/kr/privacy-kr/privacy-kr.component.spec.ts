import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyKrComponent } from './privacy-kr.component';

describe('PrivacyKrComponent', () => {
  let component: PrivacyKrComponent;
  let fixture: ComponentFixture<PrivacyKrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyKrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyKrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
