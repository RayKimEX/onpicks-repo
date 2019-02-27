import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMenGroomingComponent } from './page-mens-grooming.component';

describe('MenComponent', () => {
  let component: PageMenGroomingComponent;
  let fixture: ComponentFixture<PageMenGroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMenGroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMenGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
