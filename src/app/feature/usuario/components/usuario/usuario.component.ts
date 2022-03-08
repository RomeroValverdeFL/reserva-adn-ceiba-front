import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor() { }
  public serviciosUsuarioItems: MenuItem[] = [
    { url: './registrar', nombre: 'Registrar usuario' },
    { url: './listar', nombre: 'Listar usuarios' }
    
  ];
  ngOnInit(): void {
  }

}
