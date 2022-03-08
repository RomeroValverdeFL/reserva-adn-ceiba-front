import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkSucursales = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkUsuarios = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonSucursales() {
        await this.linkSucursales.click();
    }

    async clickBotonUsuarios() {
        await this.linkUsuarios.click();
    }
}
