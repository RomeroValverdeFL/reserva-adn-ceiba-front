import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { SucursalPage } from '../page/sucursal/sucursalPage.po';

import { ConsultarSucursalPage } from '../page/sucursal/consultarSucursalesPage.po';


describe('workspace-project Sucursal', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let sucursalPage: SucursalPage
    let consultarSucursalPage: ConsultarSucursalPage

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        consultarSucursalPage = new ConsultarSucursalPage();
        sucursalPage= new SucursalPage();

    });


    it('Deberia listar una sucursal', async () => {
      
        const pais='Colombia';
        page.navigateTo();
        navBar.clickBotonSucursales();
        sucursalPage.clickLinkListarSucursal();
        consultarSucursalPage.ingresarPais(pais);
        consultarSucursalPage.clickBotonBuscarSucursal();
        expect(true).toBe(await consultarSucursalPage.contarSucursales()>0);
       
    });

  
});
