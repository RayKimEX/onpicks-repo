import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSunCareComponent } from './page-sun-care.component';

describe('PageSunCareComponent', () => {
  let component: PageSunCareComponent;
  let fixture: ComponentFixture<PageSunCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSunCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSunCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
