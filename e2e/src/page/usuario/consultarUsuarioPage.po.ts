import { by, element } from 'protractor';

export class ConsultarUsuarioPage{

    private botonBuscar = element(by.id('buttonBuscarUsuario'));
    private inputEmail = element(by.id('inputBuscarPorEmail'));
    private rows = element.all(by.xpath('.//tbody/tr'));

    async ingresarEmail(email) {
        await this.inputEmail.sendKeys(email);
    }


    async clickBotonBuscarUsuario() {
        await this.botonBuscar.click();
    }


    async contarUsuarios() {
        return this.rows.count();
    }


}