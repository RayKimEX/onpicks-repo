import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POtherSellersComponent } from './p-other-sellers.component';

describe('POtherSellersComponent', () => {
  let component: POtherSellersComponent;
  let fixture: ComponentFixture<POtherSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POtherSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POtherSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
