import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleNButtonComponent } from './circle-n-button.component';

describe('CircleNButtonComponent', () => {
  let component: CircleNButtonComponent;
  let fixture: ComponentFixture<CircleNButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleNButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleNButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
