import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PThumbnailComponent } from './p-thumbnail.component';

describe('PThumbnailComponent', () => {
  let component: PThumbnailComponent;
  let fixture: ComponentFixture<PThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
