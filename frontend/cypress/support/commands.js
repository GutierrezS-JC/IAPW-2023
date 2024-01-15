// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.ts
import { domain as Auth0Domain } from '../../src/auth_config.json'

function logIntoGoogle(username, password, name) {
  Cypress.on(
    'uncaught:exception',
    (err) =>
      !err.message.includes('ResizeObserver loop') &&
      !err.message.includes('Error in protected function')
  )
  cy.visit('http://localhost:5173/')
  cy.get('#boton-login').click()

  cy.origin(Auth0Domain, () => {
    if (!cy.viewport('macbook-15')) {
      cy.scrollTo('bottom')
    }
    cy.get('form[data-provider="google"]').submit()
  })

  cy.origin(
    'https://accounts.google.com',
    {
      args: {
        username,
        password,
      },
    },
    ({ username, password }) => {
      Cypress.on(
        'uncaught:exception',
        (err) =>
          !err.message.includes('ResizeObserver loop') &&
          !err.message.includes('Error in protected function')
      )

      cy.get('input[type="email"]').type(username, {
        log: false,
      })
      // NOTE: The element exists on the original form but is hidden and gets rerendered, which leads to intermittent detached DOM issues
      cy.contains('Next').click().wait(4000)
      cy.get('[type="password"]').type(password, {
        log: false,
      })
      cy.contains('Next').click().wait(6000)
    }
  )

  // cy.get('h6.dropdown-header').should('contain', name)
}

Cypress.Commands.add(
  'loginToAuth0ViaSocial',
  (SOCIAL_PROVIDER) => {
    const log = Cypress.log({
      displayName: 'Social LOGIN',
      message: [`🔐 Authenticating | ${SOCIAL_PROVIDER}`],
      // @ts-ignore
      autoEnd: false,
    })
    log.snapshot('before')

    switch (SOCIAL_PROVIDER) {
      case 'microsoft':
        logIntoMicrosoft(
          Cypress.env('MICROSOFT_USERNAME'),
          Cypress.env('MICROSOFT_PASSWORD'),
          Cypress.env('MICROSOFT_NAME')
        )
        break
      case 'google':
        logIntoGoogle(
          Cypress.env('GOOGLE_USERNAME'),
          Cypress.env('GOOGLE_PASSWORD'),
          Cypress.env('GOOGLE_NAME')
        )
        break
      case 'facebook':
        logIntoFacebook(
          Cypress.env('FACEBOOK_USERNAME'),
          Cypress.env('FACEBOOK_PASSWORD'),
          Cypress.env('FACEBOOK_NAME')
        )
        break
      default:
        throw new Error('no social provider configured!')
    }

    log.snapshot('after')
    log.end()
  }
)