import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Sucursal } from '../model/sucursal';
import { RegistrarSucursal } from '../model/registrarSucursal';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {


  constructor(protected http: HttpService) {}

  public consultarPorPais(pais: String){
    return this.http.doGet<Sucursal[]>(`${environment.endpoint}/sucursales/pais/${pais}`, this.http.optsName('consultar sucursales por pais'))
  }


  public registrarSucursal(registrarSucursal: RegistrarSucursal) {
    debugger;
    return this.http.doPost<RegistrarSucursal, boolean>(`${environment.endpoint}/sucursales`, registrarSucursal,
                                                this.http.optsName('registrar sucursales'));
  }


}
