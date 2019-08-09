import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsUsComponent } from './terms-us.component';

describe('TermsUsComponent', () => {
  let component: TermsUsComponent;
  let fixture: ComponentFixture<TermsUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
