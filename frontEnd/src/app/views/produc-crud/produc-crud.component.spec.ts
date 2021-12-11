import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducCrudComponent } from './produc-crud.component';

describe('ProducCrudComponent', () => {
  let component: ProducCrudComponent;
  let fixture: ComponentFixture<ProducCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
