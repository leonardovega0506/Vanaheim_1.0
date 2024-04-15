import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirOrdenAdminComponent } from './subir-orden-admin.component';

describe('SubirOrdenAdminComponent', () => {
  let component: SubirOrdenAdminComponent;
  let fixture: ComponentFixture<SubirOrdenAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirOrdenAdminComponent]
    });
    fixture = TestBed.createComponent(SubirOrdenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
