import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarOrdenVendedorComponent } from './topbar-orden-vendedor.component';

describe('TopbarOrdenVendedorComponent', () => {
  let component: TopbarOrdenVendedorComponent;
  let fixture: ComponentFixture<TopbarOrdenVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarOrdenVendedorComponent]
    });
    fixture = TestBed.createComponent(TopbarOrdenVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
