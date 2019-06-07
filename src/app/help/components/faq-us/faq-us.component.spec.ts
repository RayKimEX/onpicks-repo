import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqUsComponent } from './faq-us.component';

describe('FaqUsComponent', () => {
  let component: FaqUsComponent;
  let fixture: ComponentFixture<FaqUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
