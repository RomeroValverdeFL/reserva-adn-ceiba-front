import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { SharedModule } from '@shared/shared.module';
import { Usuario } from '@usuario/shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { of } from 'rxjs';

import { ListarUsuarioComponent } from './listar-usuario.component';

describe('ListarUsuarioComponent', () => {
  let component: ListarUsuarioComponent;
  let fixture: ComponentFixture<ListarUsuarioComponent>;
  let usuarioService: UsuarioService;
  let listaUsuarios: Usuario[] = [
    Usuario.unUsuario({
      nombre: 'Elvis Torres',
      email: 'luiz@ceiba.com.co',
      telefono: '445534535',
      ocupacion: 'arquitecto desarrollador',
      clave: '78686243',
      tipoTarjeta: 'debito',
      nombrePropietarioTarjeta: 'Elvis Torres',
      numeroTarjeta: '1234567890123456',
      fechaExpiracionTarjeta: '05/2026',
      cvvTarjeta: '456',
      fechaCreacion: null
    })/*,
    Usuario.unUsuario({
      nombre: 'Alison Quijano',
      email: 'luiz@ceiba.com.co',
      telefono: '557768678',
      ocupacion: 'arquitecto desarrollador react js',
      clave: '7898797',
      tipoTarjeta: 'credito',
      nombrePropietarioTarjeta: 'Alison Quijano',
      numeroTarjeta: '9567834512333456',
      fechaExpiracionTarjeta: '07/2026',
      cvvTarjeta: '809',
      fechaCreacion: null
    })*/
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUsuarioComponent ],
      imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [UsuarioService, 
        DatePipe, HttpService, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'consultarPorEmail').and.returnValue(
      of(listaUsuarios)
    );
    fixture.detectChanges();
  });

  it('should create usuario', () => {
    expect(component).toBeTruthy();
  });
  it('Deberia listar usuarios por email', ()=>{
    component.email = "luiz@ceiba.com.co";
    component.buscarPorEmail()
    expect(1).toBe(component.listaUsuarios.length)
    expect(usuarioService.consultarPorEmail).toHaveBeenCalled();
  });
});
