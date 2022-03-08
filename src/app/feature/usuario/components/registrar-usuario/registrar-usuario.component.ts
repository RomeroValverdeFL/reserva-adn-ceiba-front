import { Component, OnInit } from '@angular/core';
import { RegistrarUsuario } from '@usuario/shared/model/registrarUsuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html'
})
export class RegistrarUsuarioComponent implements OnInit {
  reactiveUsuarioForm: FormGroup;
  registroUsuario: RegistrarUsuario = RegistrarUsuario.unRegistroUsuario({}); 
  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.reactiveUsuarioForm = this.fb.group({
      nombre:[this.registroUsuario.nombre,[Validators.required]],
      email:[this.registroUsuario.email,[Validators.required]],
      telefono:[this.registroUsuario.telefono,[Validators.required ]],
      ocupacion:[this.registroUsuario.ocupacion,[Validators.required ]],
      clave:[this.registroUsuario.clave,[Validators.required ]],
      tipoTarjeta:[this.registroUsuario.tipoTarjeta,[Validators.required]],
      nombrePropietarioTarjeta:[this.registroUsuario.nombrePropietarioTarjeta,[Validators.required]],
      numeroTarjeta:[this.registroUsuario.numeroTarjeta,[Validators.required]],
      fechaExpiracionTarjeta:[this.registroUsuario.fechaExpiracionTarjeta,[Validators.required]],
      cvvTarjeta:[this.registroUsuario.cvvTarjeta,[Validators.required]],
      fechaCreacion:null,
      
    })
    this.reactiveUsuarioForm.valueChanges.subscribe(value => {
      this.registroUsuario = value;
    });
  }
  registrarUsuario(registroUsuario: RegistrarUsuario):void {
    this.usuarioService.registrarUsuario(registroUsuario).subscribe(
    () => {
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'El usuario ha sido registrado correctamente'
        });
        this.reactiveUsuarioForm.reset();
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
    this.registrarUsuario(this.registroUsuario);
  }
}
