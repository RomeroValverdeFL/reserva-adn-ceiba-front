import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './shared/service/usuario.service';
import { MaterialModule } from '@core/material/material.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
@NgModule({
  declarations: [
    ListarUsuarioComponent,
    RegistrarUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    SharedModule,
    UsuarioRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  providers: [UsuarioService, DatePipe],
})
export class UsuarioModule { }
