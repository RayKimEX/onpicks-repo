import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsNavigatorComponent } from './terms-navigator.component';

describe('TermsNavigatorComponent', () => {
  let component: TermsNavigatorComponent;
  let fixture: ComponentFixture<TermsNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
