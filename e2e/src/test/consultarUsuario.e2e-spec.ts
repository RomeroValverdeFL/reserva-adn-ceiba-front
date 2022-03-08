import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { UsuarioPage } from '../page/Usuario/usuarioPage.po';

import { ConsultarUsuarioPage } from '../page/Usuario/consultarUsuarioPage.po';


describe('workspace-project Usuario', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let usuarioPage: UsuarioPage
    let consultarUsuarioPage: ConsultarUsuarioPage

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        consultarUsuarioPage = new ConsultarUsuarioPage();
        usuarioPage= new UsuarioPage();

    });


    it('Deberia listar un usuario', async () => {
      
        const email='luiz@ceiba.com.co';
        page.navigateTo();
        navBar.clickBotonUsuarios();
        usuarioPage.clickLinkListarUsuario();
        consultarUsuarioPage.ingresarEmail(email);
        consultarUsuarioPage.clickBotonBuscarUsuario();
        expect(true).toBe(await consultarUsuarioPage.contarUsuarios()>0);
       
    });

  
});
