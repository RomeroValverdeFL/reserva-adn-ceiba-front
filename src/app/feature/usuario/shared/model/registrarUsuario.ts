export class RegistrarUsuario {

    static unRegistroUsuario(obj: Object){
        return new RegistrarUsuario(
            obj['nombre'],
            obj['email'],
            obj['telefono'],
            obj['ocupacion'],
            obj['clave'],
            obj['tipoTarjeta'],
            obj['nombrePropietarioTarjeta'],
            obj['numeroTarjeta'],
            obj['fechaExpiracionTarjeta'],
            obj['cvvTarjeta'],
            obj['fechaCreacion']
        
        )
    }

    constructor( 
        public nombre: string,
        public email: string,
        public telefono: string,
        public ocupacion: string,
        public clave: string,
        public tipoTarjeta: string,
        public nombrePropietarioTarjeta: string,
        public numeroTarjeta: string,
        public fechaExpiracionTarjeta: string,
        public cvvTarjeta: string,
        public fechaCreacion: string
    )
        {};
}