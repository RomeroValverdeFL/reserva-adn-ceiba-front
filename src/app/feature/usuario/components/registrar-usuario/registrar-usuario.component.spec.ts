import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { SharedModule } from '@shared/shared.module';
import { SucursalRoutingModule } from '@sucursal/sucursal-routing.module';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { of } from 'rxjs';

import { RegistrarUsuarioComponent } from './registrar-usuario.component';

describe('RegistrarUsuarioComponent', () => {
  let component: RegistrarUsuarioComponent;
  let fixture: ComponentFixture<RegistrarUsuarioComponent>;
  let service: UsuarioService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarUsuarioComponent ],
      imports: [
        SharedModule,
        SucursalRoutingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [UsuarioService, DatePipe, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarUsuarioComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UsuarioService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe retornar formulario invalido cuando esta vacio',()=>{
    expect(component.reactiveUsuarioForm.invalid).toBeTrue();
  })

  it('Registrando usuario',()=>{
    //expect(component.reactiveUsuarioForm.).toBeTrue();
    component.reactiveUsuarioForm.controls.nombre.setValue('Marco');
    component.reactiveUsuarioForm.controls.email.setValue('marco@ceiba.com.co');
    component.reactiveUsuarioForm.controls.telefono.setValue('445534535');
    component.reactiveUsuarioForm.controls.ocupacion.setValue('arquitecto desarrollador');
    component.reactiveUsuarioForm.controls.clave.setValue('78686243');
    component.reactiveUsuarioForm.controls.tipoTarjeta.setValue('debito');
    component.reactiveUsuarioForm.controls.nombrePropietarioTarjeta.setValue('Marco Torres');
    component.reactiveUsuarioForm.controls.numeroTarjeta.setValue('1234567890123456');
    component.reactiveUsuarioForm.controls.fechaExpiracionTarjeta.setValue('05/2026');
    component.reactiveUsuarioForm.controls.cvvTarjeta.setValue('456');
    component.reactiveUsuarioForm.controls.fechaCreacion.setValue(null);
    expect(component.reactiveUsuarioForm.invalid).toBeFalse();

    spyOn(service, 'registrarUsuario').and.callFake(() =>{
      return of(true)
    });
    component.submitForm();
    expect(service.registrarUsuario).toHaveBeenCalled();
  })
  /*it('Registrando un usuario fallidamente', ()=>{
    spyOn(service, 'registrarUsuario').and.returnValue(throwError({
      "nombreExcepcion": "ExcepcionDuplicidad",
      "mensaje": "El usuario ya exite en el sistema"
    }))
    component.submitForm();
    expect(service.registrarUsuario).toHaveBeenCalled();
  })*/
});
