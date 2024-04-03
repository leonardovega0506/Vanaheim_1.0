import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdenAdminComponent } from './listar-orden-admin.component';

describe('ListarOrdenAdminComponent', () => {
  let component: ListarOrdenAdminComponent;
  let fixture: ComponentFixture<ListarOrdenAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarOrdenAdminComponent]
    });
    fixture = TestBed.createComponent(ListarOrdenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
