import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouffeComponent } from './bouffe.component';

describe('BouffeComponent', () => {
  let component: BouffeComponent;
  let fixture: ComponentFixture<BouffeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouffeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
