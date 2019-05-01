import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveBarComponent } from './progressive-bar.component';

describe('ProgressiveBarComponent', () => {
  let component: ProgressiveBarComponent;
  let fixture: ComponentFixture<ProgressiveBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressiveBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
