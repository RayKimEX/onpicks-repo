import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHairCareComponent } from './page-hair-care.component';

describe('HairComponent', () => {
  let component: PageHairCareComponent;
  let fixture: ComponentFixture<PageHairCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHairCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHairCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
