import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHealthComponent } from './page-health.component';

describe('PageHealthComponent', () => {
  let component: PageHealthComponent;
  let fixture: ComponentFixture<PageHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
