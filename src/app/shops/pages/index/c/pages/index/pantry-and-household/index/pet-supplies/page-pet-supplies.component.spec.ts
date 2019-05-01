import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePetSuppliesComponent } from './page-pet-supplies.component';

describe('PagePetSuppliesComponent', () => {
  let component: PagePetSuppliesComponent;
  let fixture: ComponentFixture<PagePetSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePetSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePetSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
