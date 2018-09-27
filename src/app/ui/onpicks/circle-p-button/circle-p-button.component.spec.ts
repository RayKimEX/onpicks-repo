import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePButtonComponent } from './circle-p-button.component';

describe('CirclePButtonComponent', () => {
  let component: CirclePButtonComponent;
  let fixture: ComponentFixture<CirclePButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclePButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclePButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
