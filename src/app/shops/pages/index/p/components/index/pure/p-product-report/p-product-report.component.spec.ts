import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PProductReportComponent } from './p-product-report.component';

describe('PProductReportComponent', () => {
  let component: PProductReportComponent;
  let fixture: ComponentFixture<PProductReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PProductReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PProductReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
