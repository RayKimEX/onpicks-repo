import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PItemDetailComponent } from './p-item-detail.component';

describe('PItemDetailComponent', () => {
  let component: PItemDetailComponent;
  let fixture: ComponentFixture<PItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
