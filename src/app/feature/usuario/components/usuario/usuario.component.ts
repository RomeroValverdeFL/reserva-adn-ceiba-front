import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }
  public serviciosUsuarioItems: MenuItem[] = [
    { url: './registrar-usuario', nombre: 'Registrar usuario' },
    { url: './listar-usuario', nombre: 'Listar usuarios' }
    
  ];
  ngOnInit(): void {
  }

}
