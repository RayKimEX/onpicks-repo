import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHouseholdSuppliesComponent } from './page-household-supplies.component';

describe('PageHouseholdSuppliesComponent', () => {
  let component: PageHouseholdSuppliesComponent;
  let fixture: ComponentFixture<PageHouseholdSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHouseholdSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHouseholdSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
