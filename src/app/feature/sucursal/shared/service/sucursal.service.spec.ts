import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Sucursal } from '../model/sucursal';
import { RegistrarSucursal } from '../model/registrarSucursal';
import { SucursalService } from './sucursal.service';

describe('SucursalService', () => {
  let service: SucursalService;
  let httpMock: HttpTestingController;
  const apiEndpointSucursalPorPais = `${environment.endpoint}/sucursales/pais`;
  const apiEndpointRegistrarSucursal = `${environment.endpoint}/sucursales`;
 
  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SucursalService, HttpService]
    });
    service = TestBed.inject(SucursalService);
    httpMock = injector.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar sucursales por pais', () => {
    const dummySucursales = [
      Sucursal.unSucursal({
        nombre: 'A1001',
        descripcion:'Departamento duplex seccion A',
        pais: 'Colombia',
        ciudad: 'Medellín',
        direccion: 'Ca. Palmeras 123',
        dimension: 110,
        numeroPisos:2,
        numeroHabitaciones: 4,
        imagenPortada: '',
        tarifaPorNoche: 250,
        status: 'ACTIVO'
      }), 
      Sucursal.unSucursal({
        nombre: 'B1001',
        descripcion:'Departamento duplex seccion B',
        pais: 'Colombia',
        ciudad: 'Medellín',
        direccion: 'Ca. Molina 124',
        dimension: 110,
        numeroPisos:2,
        numeroHabitaciones: 4,
        imagenPortada: '',
        tarifaPorNoche: 250,
        status: 'ACTIVO'
      }), 
    ];
    service.consultarPorPais('Colombia').subscribe(sucursales => {
      expect(sucursales.length).toBe(2);
      expect(sucursales).toEqual(dummySucursales);
    });
    const req = httpMock.expectOne(`${apiEndpointSucursalPorPais}/Colombia`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySucursales);
  });

  it('deberia crear una sucursal', () => {
    const dummySucursal = 
      RegistrarSucursal.unRegistroSucursal({
        nombre: 'B1002',
        descripcion:'Departamento duplex seccion B',
        pais: 'Colombia',
        ciudad: 'Medellín',
        direccion: 'Ca. Molina 124',
        dimension: 110,
        numeroPisos:2,
        numeroHabitaciones: 4,
        imagenPortada: '',
        tarifaPorNoche: 250,
        status: 'ACTIVO'
      })
    service.registrarSucursal(dummySucursal).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointRegistrarSucursal);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

});
