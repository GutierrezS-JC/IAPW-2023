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
    cy.get('#frecuencia-add-form').type('5');
    cy.get('#docExtractor-add-form').clear().type(`(cheerio) => {
      return {
          title:cheerio("title").text(),
    preview:cheerio('section article.product_pod h3 a').text(),
    price:cheerio('article div.product_main p.price_color').text(),
          product_title:cheerio('article div.product_main h1').text() 
      }
  }`);
    cy.get('#confirmar-agregar-sitio').click();
    cy.wait(500)
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.get('.website-item-list h1').last().should('have.text', 'BookStore');

    // Deshabilitar sitio
    cy.wait(500)
    cy.get('.bi.bi-toggle-on').last().click();
    cy.wait(500)
    cy.contains('button', 'Si, confirmar!').click();
    cy.wait(500)
    cy.contains('button.swal2-confirm', 'OK').click();
    cy.get('.website-item-list').last().find('span').last().find('i').first().should('have.class', 'bi bi-toggle-off');

    // Edicion
    cy.get('.bi.bi-pencil-square').last().click();
    cy.wait(1000)
    cy.get('#profundidad-form').clear().type('2');
    cy.wait(1000)
    cy.get('#frecuencia-form').clear().type('1');
    cy.get('#custom-selector-form').type('section a');

    cy.get('#confirmar-editar-sitio').click();
    cy.wait(1000)
    cy.get('button.swal2-confirm').click();

    cy.get('.website-item-list').last().within(() => {
      cy.get('h2').first().should('have.text', '1min');
    });
    cy.get('.website-item-list').last().within(() => {
      cy.get('h2').eq(1).should('have.text', '2 niveles');
    });

    // Eliminacion
    cy.get('.bi.bi-trash3-fill').last().click();
    cy.wait(1000)
    cy.contains('button', 'Si, eliminar!').click();
    cy.wait(1000)
    cy.get('button.swal2-confirm.swal2-styled').click();
  })

})
