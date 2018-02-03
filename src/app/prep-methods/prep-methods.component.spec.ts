import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepMethodsComponent } from './prep-methods.component';

describe('PrepMethodsComponent', () => {
  let component: PrepMethodsComponent;
  let fixture: ComponentFixture<PrepMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
