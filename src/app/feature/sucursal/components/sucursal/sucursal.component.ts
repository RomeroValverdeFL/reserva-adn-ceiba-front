import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  constructor() { }
  public serviciosSucursalItems: MenuItem[] = [
    { url: './registrar', nombre: 'Registrar sucursal' },
    { url: './listar', nombre: 'Listar sucursales' }
    
  ];
  ngOnInit(): void {
  }

}
