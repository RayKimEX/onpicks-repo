import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsIndexComponent } from './shops-index.component';

describe('ShopsIndexComponent', () => {
  let component: ShopsIndexComponent;
  let fixture: ComponentFixture<ShopsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
