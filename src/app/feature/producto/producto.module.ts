import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';



@NgModule({
  declarations: [
    ProductoComponent,
    ListarProductoComponent,
    CrearProductoComponent,
    BorrarProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductoModule { }
