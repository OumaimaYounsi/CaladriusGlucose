import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactlisteComponent } from './prodactliste.component';

describe('ProdactlisteComponent', () => {
  let component: ProdactlisteComponent;
  let fixture: ComponentFixture<ProdactlisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdactlisteComponent]
    });
    fixture = TestBed.createComponent(ProdactlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
