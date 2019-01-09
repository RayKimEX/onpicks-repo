import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMakeupComponent } from './page-makeup.component';

describe('MakeupComponent', () => {
  let component: PageMakeupComponent;
  let fixture: ComponentFixture<PageMakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
