import { by, element } from 'protractor';

export class RegistrarUsuarioPage{

    private botonRegistrar = element(by.id('botonRegistrarUsuario'));
    private inputNombre = element(by.id('nombre'));
    private inputEmail = element(by.id('email'));
    private inputTelefono = element(by.id('telefono'));
    private inputOcupacion = element(by.id('ocupacion'));
    private inputClave = element(by.id('clave'));
    private inputTipoTarjeta = element(by.id('tipoTarjeta'));
    private inputNombrePropietarioTarjeta = element(by.id('nombrePropietarioTarjeta'));
    private inputNumeroTarjeta = element(by.id('numeroTarjeta'));
    private inputCvvTarjeta = element(by.id('cvvTarjeta'));
    private inputFechaExpiracionTarjeta = element(by.id('fechaExpiracionTarjeta'));

    

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarEmail(email) {
        await this.inputEmail.sendKeys(email);
    }

    async ingresarTelefono(telefono) {
        await this.inputTelefono.sendKeys(telefono);
    }

    async ingresarOcupacion(ocupacion) {
        await this.inputOcupacion.sendKeys(ocupacion);
    }

    async ingresarClave(clave) {
        await this.inputClave.sendKeys(clave);
    }
    async ingresarTipoTarjeta(tipoTarjeta) {
        await this.inputTipoTarjeta.sendKeys(tipoTarjeta);
    }
    async ingresarNombrePropietarioTarjeta(nombrePropietarioTarjeta) {
        await this.inputNombrePropietarioTarjeta.sendKeys(nombrePropietarioTarjeta);
    }
    async ingresarNumeroTarjeta(numeroTarjeta) {
        await this.inputNumeroTarjeta.sendKeys(numeroTarjeta);
    }
    async ingresarCvvTarjeta(cvvTarjeta) {
        await this.inputCvvTarjeta.sendKeys(cvvTarjeta);
    }
    async ingresarFechaExpiracionTarjeta(fechaExpiracionTarjeta) {
        await this.inputFechaExpiracionTarjeta.sendKeys(fechaExpiracionTarjeta);
    }
    async clickBotonRegistrarUsuario() {
        await this.botonRegistrar.click();
    }


}