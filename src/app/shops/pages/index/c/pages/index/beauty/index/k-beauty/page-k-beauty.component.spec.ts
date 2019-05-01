import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKBeautyComponent } from './page-k-beauty.component';

describe('PageKBeautyComponent', () => {
  let component: PageKBeautyComponent;
  let fixture: ComponentFixture<PageKBeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageKBeautyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageKBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
