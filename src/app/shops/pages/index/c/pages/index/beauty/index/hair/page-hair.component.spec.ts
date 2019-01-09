import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHairComponent } from './page-hair.component';

describe('HairComponent', () => {
  let component: PageHairComponent;
  let fixture: ComponentFixture<PageHairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
