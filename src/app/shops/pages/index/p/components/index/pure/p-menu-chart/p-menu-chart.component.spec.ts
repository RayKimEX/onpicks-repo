import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMenuChartComponent } from './p-menu-chart.component';

describe('PMenuChartComponent', () => {
  let component: PMenuChartComponent;
  let fixture: ComponentFixture<PMenuChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMenuChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMenuChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
