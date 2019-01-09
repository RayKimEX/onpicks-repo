import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFragranceComponent } from './page-fragrance.component';

describe('FragranceComponent', () => {
  let component: PageFragranceComponent;
  let fixture: ComponentFixture<PageFragranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFragranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
