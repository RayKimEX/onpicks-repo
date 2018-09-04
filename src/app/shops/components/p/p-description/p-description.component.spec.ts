import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDescriptionComponent } from './p-description.component';

describe('PDescriptionComponent', () => {
  let component: PDescriptionComponent;
  let fixture: ComponentFixture<PDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
