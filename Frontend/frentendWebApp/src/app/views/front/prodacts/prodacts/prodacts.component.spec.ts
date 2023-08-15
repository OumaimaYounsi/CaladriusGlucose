import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactsComponent } from './prodacts.component';

describe('ProdactsComponent', () => {
  let component: ProdactsComponent;
  let fixture: ComponentFixture<ProdactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdactsComponent]
    });
    fixture = TestBed.createComponent(ProdactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
