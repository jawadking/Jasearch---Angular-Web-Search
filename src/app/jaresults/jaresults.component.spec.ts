import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaresultsComponent } from './jaresults.component';

describe('JaresultsComponent', () => {
  let component: JaresultsComponent;
  let fixture: ComponentFixture<JaresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
