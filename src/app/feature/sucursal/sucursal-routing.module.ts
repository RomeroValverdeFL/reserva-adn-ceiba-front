import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { ListarSucursalComponent } from './components/listar-sucursal/listar-sucursal.component';
import { RegistrarSucursalComponent } from './components/registrar-sucursal/registrar-sucursal.component';

const routes: Routes = [
  {
    path: '',
    component: SucursalComponent,
    children: [
      {
        path: 'listar',
        component: ListarSucursalComponent
      },
      {
        path: 'registrar',
        component: RegistrarSucursalComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalRoutingModule { }
