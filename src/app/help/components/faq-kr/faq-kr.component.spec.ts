import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqKrComponent } from './faq-kr.component';

describe('FaqKrComponent', () => {
  let component: FaqKrComponent;
  let fixture: ComponentFixture<FaqKrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqKrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqKrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
