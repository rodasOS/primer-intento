import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOrdenarComponent } from './formulario-ordenar.component';

describe('FormularioOrdenarComponent', () => {
  let component: FormularioOrdenarComponent;
  let fixture: ComponentFixture<FormularioOrdenarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioOrdenarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioOrdenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
