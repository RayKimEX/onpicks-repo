import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateBoxComponent } from './communicate-box.component';

describe('CommunicateBoxComponent', () => {
  let component: CommunicateBoxComponent;
  let fixture: ComponentFixture<CommunicateBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicateBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
