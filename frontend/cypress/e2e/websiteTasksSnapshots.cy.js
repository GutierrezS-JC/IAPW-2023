describe('Creacion de un sitio web, edicion, cambio de estado (deshabilitado) y eliminacion', () => {
  beforeEach(() => {
    cy.viewport('macbook-16')
    cy.loginToAuth0ViaSocial('google')
    cy.visit('http://localhost:5173/inicio')
  })

  it('Agregar un nuevo sitio, verificar en la lista, deshabilitar, editar y eliminar.', () => {
    // Creacion
    cy.get('#agregar-nuevo-sitio').click();
    cy.wait(1000);
    cy.get('#name-add-form').type('BookStore');
    cy.get('#url-add-form').type('https://books.toscrape.com');
    cy.get('.url-test').click();
    cy.wait(1000);
    cy.get('.swal2-confirm').click();
    cy.get('#profundidad-add-form').type('1');
    cy.get('#frecuencia-add-form').type('1');
    cy.get('#docExtractor-add-form').clear().type(`(cheerio) => {
        return {
            title:cheerio("title").text(),
      preview:cheerio('section article.product_pod h3 a').text(),
      price:cheerio('article div.product_main p.price_color').text(),
            product_title:cheerio('article div.product_main h1').text() 
        }
    }`);
    cy.get('#confirmar-agregar-sitio').click();
    cy.wait(1500)
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.get('.website-item-list h1').last().should('have.text', 'BookStore');

    // Esperamos que pase al menos 1 minuto para que se complete el registro de las capturas (snapshots)
    cy.wait(75000); 
    // Hago click en el boton para ver las tareas
    cy.get('.website-item-list').last().find('.btn-dark').click();
    // Esperamos al menos 3 segundos por las dudas a esperar la respuesta del servidor
    cy.wait(3000); 
    // Hago click en la row para ingresar a los snapshots de la tarea
    cy.get('table tbody tr').first().click();
    cy.wait(5000);
    cy.get('.col-md-4.sidebar ul.list-group li').first().click();
  })
})