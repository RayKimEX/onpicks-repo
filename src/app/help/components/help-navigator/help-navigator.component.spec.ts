import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpNavigatorComponent } from './help-navigator.component';

describe('HelpNavigatorComponent', () => {
  let component: HelpNavigatorComponent;
  let fixture: ComponentFixture<HelpNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
