import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMenComponent } from './page-men.component';

describe('MenComponent', () => {
  let component: PageMenComponent;
  let fixture: ComponentFixture<PageMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
