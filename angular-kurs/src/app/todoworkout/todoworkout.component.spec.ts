import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoworkoutComponent } from './todoworkout.component';

describe('TodoworkoutComponent', () => {
  let component: TodoworkoutComponent;
  let fixture: ComponentFixture<TodoworkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoworkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
