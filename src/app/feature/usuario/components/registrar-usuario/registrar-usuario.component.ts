import { Component, OnInit } from '@angular/core';
import { RegistrarUsuario } from '@usuario/shared/model/registrarUsuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  reactiveUsuarioForm: FormGroup;
  registroUsuario: RegistrarUsuario = RegistrarUsuario.unRegistroUsuario({}); 
  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.reactiveUsuarioForm = this.fb.group({
      nombre:[this.registroUsuario.nombre,[Validators.required, Validators.maxLength(30)]],
      email:[this.registroUsuario.email,[Validators.required, Validators.maxLength(30)]],
      telefono:[this.registroUsuario.telefono,[Validators.required,Validators.maxLength(30)]],
      ocupacion:[this.registroUsuario.ocupacion,[Validators.required,Validators.maxLength(30)]],
      clave:[this.registroUsuario.clave,[Validators.required,Validators.maxLength(30)]],
      tipoTarjeta:[this.registroUsuario.tipoTarjeta,[Validators.required]],
      nombrePropietarioTarjeta:[this.registroUsuario.nombrePropietarioTarjeta,[Validators.required]],
      numeroTarjeta:[this.registroUsuario.numeroTarjeta,[Validators.required]],
      fechaExpiracionTarjeta:[this.registroUsuario.fechaExpiracionTarjeta,[Validators.required]],
      cvvTarjeta:[this.registroUsuario.cvvTarjeta,[Validators.required]],
      fechaCreacion:[this.registroUsuario.fechaCreacion,[Validators.required,Validators.maxLength(30)]],
      
    })
    this.reactiveUsuarioForm.valueChanges.subscribe(value => {
      this.registroUsuario = value;
    });
  }
  registrarUsuario(registroUsuario: RegistrarUsuario):void {
    this.usuarioService.registrarUsuario(registroUsuario).subscribe(
    resp => {
      console.log('success', resp)
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'El usuario ha sido registrado correctamente'
        })
        this.reactiveUsuarioForm.reset();
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
    debugger;
    console.log('submit:',this.registroUsuario)
    this.registrarUsuario(this.registroUsuario);
  }
}
