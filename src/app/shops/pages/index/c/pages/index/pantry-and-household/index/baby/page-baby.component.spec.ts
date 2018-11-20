import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBabyComponent } from './page-baby.component';

describe('PageBabyComponent', () => {
  let component: PageBabyComponent;
  let fixture: ComponentFixture<PageBabyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBabyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
