export class Sucursal {

    static unSucursal(obj: Object){
        return new Sucursal(
            obj['nombre'],
            obj['descripcion'],
            obj['pais'],
            obj['ciudad'],
            obj['direccion'],
            obj['dimension'],
            obj['numeroPisos'],
            obj['numeroHabitaciones'],
            obj['imagenPortada'],
            obj['tarifaPorNoche'],
            obj['status']
            
        )
    }

    constructor( 
        public nombre: string,
        public descripcion: string,
        public pais: string,
        public ciudad: string,
        public direccion: string,
        public dimension: number,
        public numeroPisos: number,
        public numeroHabitaciones: number,
        public imagenPortada: string,
        public tarifaPorNoche: number,
        public status: string
    )
        {};
}