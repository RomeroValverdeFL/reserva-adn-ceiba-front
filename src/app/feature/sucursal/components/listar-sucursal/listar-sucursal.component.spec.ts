import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sucursal } from '../../shared/model/sucursal';
import { SucursalService } from '../../shared/service/sucursal.service';
import { CommonModule, DatePipe } from '@angular/common';
import { ListarSucursalComponent } from './listar-sucursal.component';
import { HttpService } from '@core/services/http.service';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('ListarSucursalComponent', () => {
  let component: ListarSucursalComponent;
  let fixture: ComponentFixture<ListarSucursalComponent>;
  let sucursalService: SucursalService;
  let listaSucursales: Sucursal[] = [
    Sucursal.unSucursal({
      nombre: 'A1000',
      descripcion: 'Departamento duplex seccion A',
      pais: 'Colombia',
      ciudad: 'Medellín',
      direccion: 'Ca. Palmeras 123',
      dimension: 110,
      numeroPisos: 2,
      numeroHabitaciones: 4,
      imagenPortada: '',
      tarifaPorNoche: 250,
      status: 'ACTIVO'
    }),
    Sucursal.unSucursal({
      nombre: 'A2000',
      descripcion: 'Departamento duplex seccion A',
      pais: 'Colombia',
      ciudad: 'Medellin',
      direccion: 'Ca. Palmeras 126',
      dimension: 110,
      numeroPisos: 2,
      numeroHabitaciones: 4,
      imagenPortada: '',
      tarifaPorNoche: 250,
      status: 'ACTIVO'
    })
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSucursalComponent ],
      imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [SucursalService, 
        DatePipe, HttpService, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSucursalComponent);
    component = fixture.componentInstance;
    sucursalService = TestBed.inject(SucursalService);
    spyOn(sucursalService, 'consultarPorPais').and.returnValue(
      of(listaSucursales)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Deberia listar sucursales por país', ()=>{
    //component.pais = "España";
    component.buscarPorPais()
    expect(2).toBe(component.listaSucursales.length);
    expect(sucursalService.consultarPorPais).toHaveBeenCalled();
  });
});
