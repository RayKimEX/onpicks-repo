import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellBeingLabelListComponent } from './well-being-label-list.component';

describe('WellBeingLabelListComponent', () => {
  let component: WellBeingLabelListComponent;
  let fixture: ComponentFixture<WellBeingLabelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellBeingLabelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellBeingLabelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
