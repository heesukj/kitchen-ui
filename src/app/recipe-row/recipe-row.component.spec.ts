import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRowComponent } from './recipe-row.component';

describe('RecipeRowComponent', () => {
  let component: RecipeRowComponent;
  let fixture: ComponentFixture<RecipeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
