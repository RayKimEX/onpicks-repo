import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShoppingIndexComponent } from './my-shopping-index.component';

describe('MyShoppingIndexComponent', () => {
  let component: MyShoppingIndexComponent;
  let fixture: ComponentFixture<MyShoppingIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShoppingIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShoppingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
