import { Component, OnInit } from '@angular/core';

import { RegistrarSucursal } from '../../shared/model/registrarSucursal';
import Swal from 'sweetalert2'
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
  
  constructor(private fb: FormBuilder,
    private sucursalService: SucursalService,) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      nombre:[this.registroSucursal.nombre,[Validators.required, Validators.maxLength(30)]],
      descripcion:[this.registroSucursal.descripcion,[Validators.required, Validators.maxLength(30)]],
      pais:[this.registroSucursal.pais,[Validators.required,Validators.maxLength(30)]],
      ciudad:[this.registroSucursal.ciudad,[Validators.required,Validators.maxLength(30)]],
      direccion:[this.registroSucursal.direccion,[Validators.required,Validators.maxLength(30)]],
      dimension:[this.registroSucursal.dimension,[Validators.required]],
      numeroPisos:[this.registroSucursal.numeroPisos,[Validators.required]],
      numeroHabitaciones:[this.registroSucursal.numeroHabitaciones,[Validators.required]],
      imagenPortada:[this.registroSucursal.imagenPortada,[Validators.required,Validators.maxLength(30)]],
      tarifaPorNoche:[this.registroSucursal.tarifaPorNoche,[Validators.required]],
      status:[this.registroSucursal.status,[Validators.required,Validators.maxLength(30)]],
      
    })
  
    this.reactiveForm.valueChanges.subscribe(value => {
      this.registroSucursal = value;
    });
  }
  registrarSucursal(registroSucursal: RegistrarSucursal):void {
    this.sucursalService.registrarSucursal(registroSucursal).subscribe(
    resp => {
      console.log('success', resp)
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'La sucursal ha sido registrado correctamente'
        })
        this.reactiveForm.reset();
    },
    error => {
      console.log('oops', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.error?.['mensaje']
      })
    })
    
  }

  submitForm(){
    this.registrarSucursal(this.registroSucursal);
  }

}
