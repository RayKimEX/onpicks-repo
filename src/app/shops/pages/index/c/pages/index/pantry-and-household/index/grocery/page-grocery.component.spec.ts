import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGroceryComponent } from './page-grocery.component';

describe('PageGroceryComponent', () => {
  let component: PageGroceryComponent;
  let fixture: ComponentFixture<PageGroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
