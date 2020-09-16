import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaragregaritemComponent } from './editaragregaritem.component';

describe('EditaragregaritemComponent', () => {
  let component: EditaragregaritemComponent;
  let fixture: ComponentFixture<EditaragregaritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaragregaritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaragregaritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
