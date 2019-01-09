import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBathAndBodyComponent } from './page-bath-and-body.component';

describe('BathAndBodyComponent', () => {
  let component: PageBathAndBodyComponent;
  let fixture: ComponentFixture<PageBathAndBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBathAndBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBathAndBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
