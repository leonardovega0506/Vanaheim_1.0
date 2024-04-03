import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenFinanzasComponent } from './detalle-orden-finanzas.component';

describe('DetalleOrdenFinanzasComponent', () => {
  let component: DetalleOrdenFinanzasComponent;
  let fixture: ComponentFixture<DetalleOrdenFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOrdenFinanzasComponent]
    });
    fixture = TestBed.createComponent(DetalleOrdenFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
