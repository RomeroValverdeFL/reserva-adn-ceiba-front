import { by, element } from 'protractor';

export class SucursalPage{

    private linkRegistrarSucursal = element(by.id('linkRegistrar Sucursal'));
    private linkListarSucursales= element(by.id('linkListar Sucursales'));
    

    async clickLinkRegistrarSucursal() {
        await this.linkRegistrarSucursal.click();
    }

    async clickLinkListarSucursal() {
        await this.linkListarSucursales.click();
    }

  

}