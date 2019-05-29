import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsKrComponent } from './terms-kr.component';

describe('TermsKrComponent', () => {
  let component: TermsKrComponent;
  let fixture: ComponentFixture<TermsKrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsKrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsKrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
