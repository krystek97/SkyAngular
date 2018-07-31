import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavetaskComponent } from './savetask.component';

describe('SavetaskComponent', () => {
  let component: SavetaskComponent;
  let fixture: ComponentFixture<SavetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
