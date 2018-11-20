import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiveButtonComponent } from './list-active-button.component';

describe('ListActiveButtonComponent', () => {
  let component: ListActiveButtonComponent;
  let fixture: ComponentFixture<ListActiveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActiveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActiveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
