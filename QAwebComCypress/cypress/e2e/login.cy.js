
/// <reference types="cypress"/>
// funcionalidades
describe("Login", () => {
    beforeEach(() => {
        cy.viewport("iphone-6")
    });
    // cenarios
    it('Login com sucesso', () => {
        // abrir a aplicação
        cy.visit('https://automationpratice.com.br/login');
        // preenche email e senha
        cy.get('#user').type('pedrojr@email.com');
        cy.get('#password').type('123456');
        // clica em entrar
        cy.get('#btnLogin').click();

        // validar mensagem
        cy.get('#swal2-title').should('be.visible');
        cy.get('#swal2-title').should('have.text', 'Login realizado');
    });
    
    it("E-mail invalido", () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('jggkjgjgjgjgjgj');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text','E-mail inválido.'); 
    });

    it("Senha invalida", () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('pedrojr@email.com');
        cy.get('#password').type('123');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text','Senha invalida.'); 
    });    
   
});

