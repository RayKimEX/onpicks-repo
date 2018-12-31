import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkincareComponent } from './page-skincare.component';

describe('SkincareComponent', () => {
  let component: PageSkincareComponent;
  let fixture: ComponentFixture<PageSkincareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSkincareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSkincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
