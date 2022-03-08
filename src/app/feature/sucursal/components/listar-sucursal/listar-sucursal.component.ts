import { Component, OnInit } from '@angular/core';
import {Sucursal  } from '../../shared/model/sucursal';
import { SucursalService } from '../../shared/service/sucursal.service';
@Component({
  selector: 'app-listar-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.css']
})
export class ListarSucursalComponent implements OnInit {
  public listaSucursales:Sucursal[] = [];
  public pais:string;
  Cabeceras: string[] = [
    '#',
    'Nombre',
    'Descripcion',
    'País',
    'Ciudad',
    'Direccion',
    'Dimensión(mt2)',
    'N° Pisos',
    'N° Habitaciones',
    'Tarifa/Noche (US)',
    'Estado'
  ];
  constructor(protected sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.listarSucursales();
  }
  listarSucursales(){
    this.sucursalService.listar().subscribe((data: Sucursal[])=>{
      this.listaSucursales = data;
    })
  }
  buscarPorPais(){
    this.sucursalService.consultarPorPais(this.pais).subscribe((data: Sucursal[])=>{
      this.listaSucursales = data;
    })
  }

}
