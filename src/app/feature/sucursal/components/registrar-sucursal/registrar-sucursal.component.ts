import { Component, OnInit } from '@angular/core';

import { RegistrarSucursal } from '../../shared/model/registrarSucursal';
import Swal from 'sweetalert2';
import { SucursalService } from '../../shared/service/sucursal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-sucursal',
  templateUrl: './registrar-sucursal.component.html',
  styleUrls: ['./registrar-sucursal.component.css']
})
export class RegistrarSucursalComponent implements OnInit {
  reactiveForm: FormGroup;
  registroSucursal: RegistrarSucursal = RegistrarSucursal.unRegistroSucursal({}); 
  Paises: string[] = [
    'Perú',
    'Colombia'
  ];
  constructor(private fb: FormBuilder,
    private sucursalService: SucursalService,) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      nombre:[this.registroSucursal.nombre,[Validators.required]],
      descripcion:[this.registroSucursal.descripcion,[Validators.required]],
      pais:[this.registroSucursal.pais,[Validators.required ]],
      ciudad:[this.registroSucursal.ciudad,[Validators.required ]],
      direccion:[this.registroSucursal.direccion,[Validators.required ]],
      dimension:[this.registroSucursal.dimension,[Validators.required]],
      numeroPisos:[this.registroSucursal.numeroPisos,[Validators.required]],
      numeroHabitaciones:[this.registroSucursal.numeroHabitaciones,[Validators.required]],
      imagenPortada:'',
      tarifaPorNoche:[this.registroSucursal.tarifaPorNoche,[Validators.required]],
      status:[this.registroSucursal.status,[Validators.required ]],
      
    })
  
    this.reactiveForm.valueChanges.subscribe(value => {
      this.registroSucursal = value;
    });
  }
  registrarSucursal(registroSucursal: RegistrarSucursal):void {
    registroSucursal.imagenPortada = '';
    this.sucursalService.registrarSucursal(registroSucursal).subscribe(
    () => {
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'La sucursal ha sido registrado correctamente'
        });
        this.reactiveForm.reset();
    },
    error => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.error?.['mensaje']
      });
    })
    
  }

  submitForm(){
    this.registrarSucursal(this.registroSucursal);
  }

}
