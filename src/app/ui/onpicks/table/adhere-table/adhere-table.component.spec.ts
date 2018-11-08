import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhereTableComponent } from './adhere-table.component';

describe('AdhereTableComponent', () => {
  let component: AdhereTableComponent;
  let fixture: ComponentFixture<AdhereTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhereTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhereTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
