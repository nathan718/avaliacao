/// <reference types="cypress"/>
Cypress.Commands.add('resetCookies', () => {
    cy.clearCookies();
});

describe('Calculando envio', () => {
    beforeEach(() => {
        cy.resetCookies();
    });

    it('Resultado', () => {
        cy.visit('/');
        cy.get('#originPostcode')
            .should('be.visible').click().type('60355305');
        cy.get('#weight')
            .should('be.visible').click();
        cy.get('[data-value="0.3"]')
            .should('be.visible').click();
        cy.get('#packageHeight')
            .should('be.visible').click().type('130');
        cy.get('#packageWidth')
            .should('be.visible').click().type('50');
        cy.get('#packageDepth')
            .should('be.visible').click().type('30');
        cy.get('#destinationPostcode')
            .should('be.visible').click().type('29027415');
        cy.get('[data-cy="calculator-submit"]')
            .scrollIntoView().should('be.visible').click({ force: true }).wait(10000);
        cy.get('.sc-hhyKGa')
            .should('be.visible', { timeout: 10000 });
    });

    it('Exceção 1 (remetente incorreto)', () => {
        cy.visit('/');
        cy.get('#weight')
            .should('be.visible').click();
        cy.get('[data-value="0.3"]')
            .should('be.visible').click();
        cy.get('#packageHeight')
            .should('be.visible').click().type('130');
        cy.get('#packageWidth')
            .should('be.visible').click().type('50');
        cy.get('#packageDepth')
            .should('be.visible').click().type('30');
        cy.get('#destinationPostcode')
            .should('be.visible').click().type('29027415');
        cy.get('[data-cy="calculator-submit"]')
            .scrollIntoView().should('be.visible').click({ force: true });
        cy.get('#originPostcode-helper-text')
            .should('be.visible', { timeout: 10000 });
    });

    it('Exceção 2 (destinatário incorreto)', () => {
        cy.visit('/');
        cy.get('#originPostcode')
            .should('be.visible').click().type('60355305');
        cy.get('#weight')
            .should('be.visible').click();
        cy.get('[data-value="0.3"]')
            .should('be.visible').click();
        cy.get('#packageHeight')
            .should('be.visible').click().type('130');
        cy.get('#packageWidth')
            .should('be.visible').click().type('50');
        cy.get('#packageDepth')
            .should('be.visible').click().type('30');
        cy.get('[data-cy="calculator-submit"]')
            .scrollIntoView().should('be.visible').click({ force: true }).wait(10000);
        cy.get('#destinationPostcode-helper-text')
            .scrollIntoView().should('be.visible', { timeout: 10000 });
    });

    it('Exceção alertas de tela', () => {
        cy.visit('/');
        cy.get('#weight')
            .should('be.visible').click();
        cy.get('[data-value="0.3"]')
            .should('be.visible').click();
        cy.get('#packageHeight')
            .should('be.visible').click().type('0.5');
        cy.get('#packageWidth')
            .should('be.visible').click().type('8');
        cy.get('#packageDepth')
            .should('be.visible').click().type('12');
        cy.get('[data-cy="calculator-submit"]')
            .scrollIntoView().should('be.visible').click({ force: true }).wait(10000);
        cy.get('#destinationPostcode-helper-text')
            .scrollIntoView().should('be.visible', { timeout: 10000 });
        cy.get('#packageDepth-helper-text')
            .scrollIntoView().should('be.visible', { timeout: 10000 });
        cy.get('#originPostcode-helper-text')
            .should('be.visible', { timeout: 10000 });       
    });
});
