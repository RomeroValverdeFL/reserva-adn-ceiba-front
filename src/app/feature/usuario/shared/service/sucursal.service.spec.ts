import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { RegistrarUsuario } from '../model/registrarUsuario';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpMock: HttpTestingController;
  const apiEndpointUsuarioPorEmail = `${environment.endpoint}/usuarios/email`;
  const apiEndpointRegistrarUsuario = `${environment.endpoint}/usuarios`;
 
  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService, HttpService]
    });
    service = TestBed.inject(UsuarioService);
    httpMock = injector.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar usuarios por email', () => {
    const dummyUsuarios = [
        Usuario.unUsuario({
        nombre: 'test',
        email:'test@ceiba.com.co',
        telefono: '958797188',
        ocupacion: 'desarrollador',
        clave: '1234',
        tipoTarjeta: 'credito',
        nombrePropietarioTarjeta: 'test',
        numeroTarjeta: '1234123412341234',
        fechaExpiracionTarjeta: '06/2026',
        cvvTarjeta: '123',
        fechaCreacion: '2022-02-28'
      }), 
      Usuario.unUsuario({
        nombre: 'Luiz Romero',
        email:'luiz@ceiba.com.co',
        telefono: '958797180',
        ocupacion: 'ingeniero',
        clave: '9876',
        tipoTarjeta: 'debito',
        nombrePropietarioTarjeta: 'Luiz Romero',
        numeroTarjeta: '1234123412341236',
        fechaExpiracionTarjeta: '09/2026',
        cvvTarjeta: '456',
        fechaCreacion: '2022-03-02'
      }), 
    ];
    service.consultarPorEmail('luiz@ceiba.com.co').subscribe(usuarios => {
      expect(usuarios.length).toBe(2);
      expect(usuarios).toEqual(dummyUsuarios);
    });
    const req = httpMock.expectOne(`${apiEndpointUsuarioPorEmail}/luiz@ceiba.com.co`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsuarios);
  });

  it('deberia crear un usuario', () => {
    const dummyUsuario = 
      RegistrarUsuario.unRegistroUsuario({
        nombre: 'Francisco Velarde',
        email:'francisco@ceiba.com.co',
        telefono: '5135253545',
        ocupacion: 'contador',
        clave: '8765',
        tipoTarjeta: 'credito',
        nombrePropietarioTarjeta: 'Francisco Velarde',
        numeroTarjeta: '4455123412341236',
        fechaExpiracionTarjeta: '05/2028',
        cvvTarjeta: '789',
        fechaCreacion: '2022-03-03'
      })
    service.registrarUsuario(dummyUsuario).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointRegistrarUsuario);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

});
