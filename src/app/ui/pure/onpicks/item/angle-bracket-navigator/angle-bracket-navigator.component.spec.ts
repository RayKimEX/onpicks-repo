import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleBracketNavigatorComponent } from './angle-bracket-navigator.component';

describe('AngleBracketNavigatorComponent', () => {
  let component: AngleBracketNavigatorComponent;
  let fixture: ComponentFixture<AngleBracketNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleBracketNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleBracketNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
