import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { RegistrarUsuario } from '../model/registrarUsuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(protected http: HttpService) {}

  public consultarPorEmail(email: String){
    return this.http.doGet<Usuario[]>(`${environment.endpoint}/usuarios/email/${email}`, this.http.optsName('consultar usuarios por email'))
  }

  public listar(){
    return this.http.doGet<Usuario[]>(`${environment.endpoint}/usuarios`, this.http.optsName('listar usuarios'))
  }

  public registrarUsuario(registrarUsuario: RegistrarUsuario) {
    return this.http.doPost<RegistrarUsuario, boolean>(`${environment.endpoint}/usuarios`, registrarUsuario,
                                                this.http.optsName('registrar usuarios'));
  }


}
