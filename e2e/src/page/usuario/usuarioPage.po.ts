import { by, element } from 'protractor';

export class UsuarioPage{

    private linkRegistrarUsuario = element(by.id('linkRegistrar usuario'));
    private linkListarUsuarios= element(by.id('linkListar usuarios'));
    

    async clickLinkRegistrarUsuario() {
        await this.linkRegistrarUsuario.click();
    }

    async clickLinkListarUsuario() {
        await this.linkListarUsuarios.click();
    }

  

}