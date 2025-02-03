import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTaskBlockComponent } from './form-add-task-block.component';

describe('FormAddTaskBlockComponent', () => {
  let component: FormAddTaskBlockComponent;
  let fixture: ComponentFixture<FormAddTaskBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddTaskBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddTaskBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
