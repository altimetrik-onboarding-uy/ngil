import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComoponentComponent } from './column-comoponent.component';

describe('ColumnComoponentComponent', () => {
  let component: ColumnComoponentComponent;
  let fixture: ComponentFixture<ColumnComoponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnComoponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
