import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SucursalRoutingModule } from '../../sucursal-routing.module';
import { SucursalService } from '../../shared/service/sucursal.service';
import { RegistrarSucursalComponent } from './registrar-sucursal.component';
import { SharedModule } from '@shared/shared.module';
import { HttpService } from '@core/services/http.service';
import { of, throwError } from 'rxjs';
describe('RegistrarSucursalComponent', () => {
  let component: RegistrarSucursalComponent;
  let service: SucursalService;
  let fixture: ComponentFixture<RegistrarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSucursalComponent ],
      imports: [
        SharedModule,
        SucursalRoutingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [SucursalService, DatePipe, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSucursalComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SucursalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario invalido cuando esta vacio',()=>{
    expect(component.reactiveForm.invalid).toBeTrue();
  })

  
  it('Registrando sucursal',()=>{
    expect(component.reactiveForm.invalid).toBeTrue();
    component.reactiveForm.controls.nombre.setValue('A1300');
    component.reactiveForm.controls.descripcion.setValue('Departamento duplex seccion A');
    component.reactiveForm.controls.pais.setValue('Colombia');
    component.reactiveForm.controls.ciudad.setValue('Medellín');
    component.reactiveForm.controls.direccion.setValue('Ca. Palmeras 123');
    component.reactiveForm.controls.dimension.setValue(110);
    component.reactiveForm.controls.numeroPisos.setValue(2);
    component.reactiveForm.controls.numeroHabitaciones.setValue(4);
    component.reactiveForm.controls.imagenPortada.setValue('');
    component.reactiveForm.controls.tarifaPorNoche.setValue(250);
    component.reactiveForm.controls.status.setValue('ACTIVO');
    expect(component.reactiveForm.invalid).toBeFalse();

    spyOn(service, 'registrarSucursal').and.callFake(() =>{
      return of(true)
    });
    component.submitForm();
    expect(service.registrarSucursal).toHaveBeenCalled();
  }) 

  it('Registrando una sucursal fallidamente', ()=>{
    spyOn(service, 'registrarSucursal').and.returnValue(throwError({
      "nombreExcepcion": "ExcepcionDuplicidad",
      "mensaje": "La sucursal ya exite en el sistema"
    }))
    component.submitForm();
    expect(service.registrarSucursal).toHaveBeenCalled();
  })
});
