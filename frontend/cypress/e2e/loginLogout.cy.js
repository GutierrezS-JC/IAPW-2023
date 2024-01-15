describe('Login, verificacion de usuario, logout', () => {
  beforeEach(() => {
    cy.viewport('macbook-16')
    cy.loginToAuth0ViaSocial('google')
    cy.visit('http://localhost:5173/inicio')
  })

  it('Logueado correctamente y cierre de sesion', () => {
    cy.get('#title-hello').should('contain', 'Hola, Ange Postecoglou')
    cy.wait(1000);
    cy.get('#cerrar-sesion-button').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.wait(1000);
  })

})