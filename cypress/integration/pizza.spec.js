describe('Final tests', () => {
    it('can add text to the box', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')

        cy.get('[href="/pizza"]').click()

        cy.get('#textbox')
        .type("I live in a van.")
        .should('have.value', "I live in a van.")

    });

    it('can submit the form', () => {
        
    });
    it('can select multiple toppings', () => {
        cy.get('input[name="pepper"]')
        
    });
})