import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SucursalService } from './shared/service/sucursal.service';
import { ListarSucursalComponent } from './components/listar-sucursal/listar-sucursal.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { SucursalRoutingModule } from './sucursal-routing.module';

import { RegistrarSucursalComponent } from './components/registrar-sucursal/registrar-sucursal.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    ListarSucursalComponent,
    SucursalComponent,
    RegistrarSucursalComponent
  ],
  imports: [
    SharedModule,
    SucursalRoutingModule,
  ],
  providers: [SucursalService, DatePipe],
})
export class SucursalModule { }
