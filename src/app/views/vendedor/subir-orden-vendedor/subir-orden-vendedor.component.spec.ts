import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirOrdenVendedorComponent } from './subir-orden-vendedor.component';

describe('SubirOrdenVendedorComponent', () => {
  let component: SubirOrdenVendedorComponent;
  let fixture: ComponentFixture<SubirOrdenVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirOrdenVendedorComponent]
    });
    fixture = TestBed.createComponent(SubirOrdenVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
