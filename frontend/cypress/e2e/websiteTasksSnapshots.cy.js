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
    cy.get('#custo-selector-add-form').type('section a');
    cy.get('#confirmar-agregar-sitio').click();
    cy.wait(1500)
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.get('.website-item-list h1').last().should('have.text', 'BookStore');

    // Agregamos un segundo sitio
    cy.get('#agregar-nuevo-sitio').click();
    cy.wait(1000);
    cy.get('#name-add-form').type('BookStore2');
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
    cy.get('#custo-selector-add-form').type('section a');
    cy.get('#confirmar-agregar-sitio').click();
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.get('.website-item-list h1').last().should('have.text', 'BookStore2');

    // Esperamos que pase al menos 1 minuto para que se complete el registro de las capturas (snapshots)
    // Mientras vemos las tareas de un sitio registrado, se seguiran registrando tambien para el segundo sitio
    cy.wait(70000);

    // Ver tareas
    cy.get('.website-item-list').last().find('.btn-dark').click();

    // Esperamos al menos 4 segundos por las dudas a esperar la respuesta del servidor
    cy.wait(4000);

    // Ver Snapshots
    // Verificamos que exista al menos un elemento en la lista. 
    // El mas nuevo es el ultimo registrado en la lista. Hacemos click.
    cy.get('table tbody tr').last().should('exist').click();

    cy.wait(5000);

    // Detalles de snapshot (captura) - Seleccionar
    // Verificamos que exista al menos un snapshot segun nuestro test y hacemos click en el primero
    cy.get('.col-md-4.sidebar ul.list-group li').first().should('exist').click().should('have.class', 'selected-snapshot');
    cy.wait(2000);
    // Dejamos de seleccionar snapshot
    cy.get('.col-md-4.sidebar ul.list-group li').first().should('exist').click().should('not.have.class', 'selected-snapshot');

    // Busqueda
    cy.wait(1000);
    cy.get('#busqueda-snapshot').type('Light in the attic');
    cy.get('#busqueda-snapshot-button').click()
    cy.wait(3000);
    cy.get('.snapshot-result').should('have.length.gte', 1);

    // Volver al inicio
    cy.get('#main-title-link').click();

    // Deshabilitamos los sitios
    cy.get('.website-item-list').each(($websiteItem) => {
      const $toggleIcon = $websiteItem.find('.bi-toggle-on');
      cy.wrap($toggleIcon).click();
      cy.wait(1000)
      cy.contains('button', 'Si, confirmar!').click();
      cy.wait(1000)
      cy.contains('button.swal2-confirm', 'OK').click();
      cy.wait(2000)
    })

  })
})