import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkinCareComponent } from './page-skin-care.component';

describe('SkinCareComponent', () => {
  let component: PageSkinCareComponent;
  let fixture: ComponentFixture<PageSkinCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSkinCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSkinCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
