import { by, element } from 'protractor';

export class ConsultarSucursalPage{

    private botonBuscar = element(by.id('buttonBuscarSucursal'));
    private inputEmailInfractor = element(by.id('inputBuscarPorPais'));
    private rows = element.all(by.xpath('.//tbody/tr'));

    async ingresarPais(pais) {
        await this.inputEmailInfractor.sendKeys(pais);
    }


    async clickBotonBuscarSucursal() {
        await this.botonBuscar.click();
    }


    async contarSucursales() {
        return this.rows.count();
    }


}