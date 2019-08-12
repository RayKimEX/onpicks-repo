import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMobileMenuComponent } from './p-mobile-menu.component';

describe('PMobileMenuComponent', () => {
  let component: PMobileMenuComponent;
  let fixture: ComponentFixture<PMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
