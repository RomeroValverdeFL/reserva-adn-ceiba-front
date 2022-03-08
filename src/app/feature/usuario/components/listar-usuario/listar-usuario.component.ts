import { Component, OnInit } from '@angular/core';
import { Usuario } from '@usuario/shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  public listaUsuarios:Usuario[] = [];
  public email:string;
  Cabeceras: string[] = [
    '#',
    'Nombre',
    'Email',
    'Teléfono',
    'Ocupación'
  ];
  constructor(protected usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }
  listarUsuarios(){
    this.usuarioService.listar().subscribe((data: Usuario[])=>{
      this.listaUsuarios = data;
    })
  }
  buscarPorEmail(){
    this.usuarioService.consultarPorEmail(this.email).subscribe((data: Usuario[])=>{
      this.listaUsuarios = data;
    })
  }
}
