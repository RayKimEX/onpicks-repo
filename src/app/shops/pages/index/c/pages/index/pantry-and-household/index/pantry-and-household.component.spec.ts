import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryAndHouseholdComponent } from './pantry-and-household.component';

describe('PantryAndHouseholdComponent', () => {
  let component: PantryAndHouseholdComponent;
  let fixture: ComponentFixture<PantryAndHouseholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryAndHouseholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryAndHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
