import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSpoqaComponent } from './font-spoqa.component';

describe('FontSpoqaComponent', () => {
  let component: FontSpoqaComponent;
  let fixture: ComponentFixture<FontSpoqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSpoqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSpoqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
