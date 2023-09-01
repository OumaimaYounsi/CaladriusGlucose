import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconseilComponent } from './addconseil.component';

describe('AddconseilComponent', () => {
  let component: AddconseilComponent;
  let fixture: ComponentFixture<AddconseilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddconseilComponent]
    });
    fixture = TestBed.createComponent(AddconseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
