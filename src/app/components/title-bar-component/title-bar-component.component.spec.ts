import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarComponentComponent } from './title-bar-component.component';

describe('TitleBarComponentComponent', () => {
  let component: TitleBarComponentComponent;
  let fixture: ComponentFixture<TitleBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
