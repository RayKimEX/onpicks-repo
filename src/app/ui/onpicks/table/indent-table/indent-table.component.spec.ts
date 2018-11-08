import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentTableComponent } from './indent-table.component';

describe('IndentTableComponent', () => {
  let component: IndentTableComponent;
  let fixture: ComponentFixture<IndentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
