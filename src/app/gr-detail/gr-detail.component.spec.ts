import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrDetailComponent } from './gr-detail.component';

describe('GrDetailComponent', () => {
  let component: GrDetailComponent;
  let fixture: ComponentFixture<GrDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
