            /// <reference types="cypress"/>

                                describe('Calculando envio', ()=>{
                                    it('Resultado',()=>{
                                        cy.visit('https://web.superfrete.com/')
                                        cy.get('#originPostcode')
                                        .should('be.visible').click().type('60355305')
                                        cy.get('#weight')
                                        .should('be.visible').click()
                                        cy.get('[data-value="0.3"]')
                                        .should('be.visible').click()
                                        cy.get('#packageHeight')
                                    .should('be.visible').click().type('130')
                                    cy.get('#packageWidth')
                                        .should('be.visible').click().type('50')
                                        cy.get('#packageDepth')
                                        .should('be.visible').click().type('30')
                                        cy.get('#destinationPostcode')
                                        .should('be.visible').click().type('29027415')
                                        cy.get('[data-cy="calculator-submit"]')
                                        .should('be.visible').click().wait(10000)
                                        cy.get('.sc-hhyKGa')
                                        .should('be.visible', { timeout: 10000 });
                                        

         

                                    ///Testes de exceçoes///
                                    
                                    it('Exceçao 2 (destinatario incorreto)',()=>{
                                    
  cy.visit('https://web.superfrete.com/')
                                    cy.get('#originPostcode')
                                    .should('be.visible').click().type('60355305')
                                    cy.get('#weight')
                                    .should('be.visible').click()
                                    cy.get('[data-value="0.3"]')
                                    .should('be.visible').click()
                                    cy.get('#packageHeight')
                                .should('be.visible').click().type('130')
                                cy.get('#packageWidth')
                                    .should('be.visible').click().type('50')
                                    cy.get('#packageDepth')
                                    .should('be.visible').click().type('30')       
                                    cy.get('[data-cy="calculator-submit"]')
                                    .should('be.visible').click().wait(10000)
                                    cy.get('#destinationPostcode-helper-text')
                                    .should('be.visible' , { timeout: 10000 });
                                        })
                                    })

                                    it('Exceçao 1(rementente incorreto)',()=>{
                                     
                                        cy.visit('https://web.superfrete.com/' , { timeout: 10000 });
                                        cy.get('#weight')
                                        .should('be.visible').click()
                                        cy.get('[data-value="0.3"]')
                                        .should('be.visible').click()
                                        cy.get('#packageHeight')
                                    .should('be.visible').click().type('130')
                                    cy.get('#packageWidth')
                                        .should('be.visible').click().type('50')
                                        cy.get('#packageDepth')
                                        .should('be.visible').click().type('30')
                                        cy.get('#destinationPostcode')
                                        .should('be.visible').click().type('29027415')
                                        cy.get('[data-cy="calculator-submit"]')
                                        .should('be.visible').click().wait(10000)
                                        cy.get('#originPostcode-helper-text')
                                        .should('be.visible' , { timeout: 10000 });
                                            })
                                        })



                                        
                                    it('Exceçao 2 (destinatario incorreto)',()=>{
                                    
                                           
                                        cy.visit('https://web.superfrete.com/') , { timeout: 10000 });
                                        cy.get('#originPostcode')
                                        .should('be.visible').click().type('60355305')
                                        cy.get('#weight')
                                        .should('be.visible').click()
                                        cy.get('[data-value="0.3"]')
                                        .should('be.visible').click()
                                        cy.get('#packageHeight')
                                    .should('be.visible').click().type('130')
                                    cy.get('#packageWidth')
                                        .should('be.visible').click().type('50')
                                        cy.get('#packageDepth')
                                        .should('be.visible').click().type('30')       
                                        cy.get('[data-cy="calculator-submit"]')
                                        .should('be.visible').click().wait(10000)
                                        cy.get('#destinationPostcode-helper-text')
                                        .should('be.visible' , { timeout: 10000 });
                                            })
                                     
                                
                            
                

        





