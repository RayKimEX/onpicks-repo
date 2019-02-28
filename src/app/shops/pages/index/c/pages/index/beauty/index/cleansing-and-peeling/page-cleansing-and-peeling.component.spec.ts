import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCleansingAndPeelingComponent } from './page-cleansing-and-peeling.component';

describe('PageCleansingAndPeelingComponent', () => {
  let component: PageCleansingAndPeelingComponent;
  let fixture: ComponentFixture<PageCleansingAndPeelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCleansingAndPeelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCleansingAndPeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
