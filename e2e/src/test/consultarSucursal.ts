import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { SucursalPage } from '../page/sucursal/sucursalPage.po';

import { ConsultarSucursalPage } from '../page/sucursal/consultarSucursalesPage.po';


describe('workspace-project Comparendo', () => {
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
      
        String PAIS;
        page.navigateTo();
        navBar.clickBotonProductos();
        sucursalPage.clickLinkListarComparendo();
        consultarSucursalPage.ingresarPais(PAIS);
        consultarSucursalPage.clickBotonBuscarComparendo();
        expect(true).toBe(await consultarComparendoPage.contarComparendos()>0);
       
    });

  
});
