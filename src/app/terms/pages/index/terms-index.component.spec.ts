import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsIndexComponent } from './terms-index.component';

describe('TermsIndexComponent', () => {
  let component: TermsIndexComponent;
  let fixture: ComponentFixture<TermsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
