import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBodyCareComponent } from './page-body-care.component';

describe('BathAndBodyComponent', () => {
  let component: PageBodyCareComponent;
  let fixture: ComponentFixture<PageBodyCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBodyCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBodyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
