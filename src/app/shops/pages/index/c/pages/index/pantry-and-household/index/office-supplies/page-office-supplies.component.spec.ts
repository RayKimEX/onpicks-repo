import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfficeSuppliesComponent } from './page-office-supplies.component';

describe('PageOfficeSuppliesComponent', () => {
  let component: PageOfficeSuppliesComponent;
  let fixture: ComponentFixture<PageOfficeSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOfficeSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOfficeSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
