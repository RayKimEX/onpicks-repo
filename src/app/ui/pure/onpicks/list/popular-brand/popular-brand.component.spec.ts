import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBrandComponent } from './popular-brand.component';

describe('PopularBrandComponent', () => {
  let component: PopularBrandComponent;
  let fixture: ComponentFixture<PopularBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
