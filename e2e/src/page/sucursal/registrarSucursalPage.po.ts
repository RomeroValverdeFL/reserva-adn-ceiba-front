import { by, element } from 'protractor';

export class RegistrarSucursalPage{

    private botonRegistrar = element(by.id('botonRegistrarSucursal'));
    private inputNombre = element(by.id('nombre'));
    private inputDescripcion = element(by.id('descripcion'));
    private inputNumeroPisos = element(by.id('numeroPisos'));
    private inputNumeroHabitaciones = element(by.id('numeroHabitaciones'));
    private inputTarifaPorNoche = element(by.id('tarifaPorNoche'));
    private inputPais = element(by.id('pais'));
    

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarDescripcion(descripcion) {
        await this.inputDescripcion.sendKeys(descripcion);
    }

    async ingresarNumeroPisos(numeroPisos) {
        await this.inputNumeroPisos.sendKeys(numeroPisos);
    }

    async ingresarNumeroHabitaciones(numeroHabitaciones) {
        await this.inputNumeroHabitaciones.sendKeys(numeroHabitaciones);
    }

    async ingresarTarifaPorNoche(tarifaPorNoche) {
        await this.inputTarifaPorNoche.sendKeys(tarifaPorNoche);
    }
    async ingresarPais(pais) {
        await this.inputPais.sendKeys(pais);
    }
    async clickBotonRegistrarSucursal() {
        await this.botonRegistrar.click();
    }


}