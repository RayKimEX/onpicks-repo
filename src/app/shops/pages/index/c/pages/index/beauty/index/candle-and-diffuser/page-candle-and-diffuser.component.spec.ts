import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCandleAndDiffuserComponent } from './page-candle-and-diffuser.component';

describe('PageCandleAndDiffuserComponent', () => {
  let component: PageCandleAndDiffuserComponent;
  let fixture: ComponentFixture<PageCandleAndDiffuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCandleAndDiffuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCandleAndDiffuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
