import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontRobotoComponent } from './font-roboto.component';

describe('FontRobotoComponent', () => {
  let component: FontRobotoComponent;
  let fixture: ComponentFixture<FontRobotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontRobotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontRobotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
