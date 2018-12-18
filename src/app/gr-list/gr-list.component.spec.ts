import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrListComponent } from './gr-list.component';

describe('GrListComponent', () => {
  let component: GrListComponent;
  let fixture: ComponentFixture<GrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
