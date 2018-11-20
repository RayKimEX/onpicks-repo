import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersonalCareComponent } from './page-personal-care.component';

describe('PagePersonalCareComponent', () => {
  let component: PagePersonalCareComponent;
  let fixture: ComponentFixture<PagePersonalCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePersonalCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePersonalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
