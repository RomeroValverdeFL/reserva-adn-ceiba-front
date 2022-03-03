import { Component, OnInit } from '@angular/core';
import {Sucursal  } from '../../shared/model/sucursal';
@Component({
  selector: 'app-listar-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.css']
})
export class ListarSucursalComponent implements OnInit {
  public listaSucursales:Sucursal[] = [];
  Cabeceras: string[] = [
    '#',
    'Nombre',
    'Descripcion',
    'País',
    'Ciudad',
    'Direccion',
    'Estado'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
