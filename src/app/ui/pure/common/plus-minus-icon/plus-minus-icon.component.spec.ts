import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusIconComponent } from './plus-minus-icon.component';

describe('PlusMinusIconComponent', () => {
  let component: PlusMinusIconComponent;
  let fixture: ComponentFixture<PlusMinusIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
