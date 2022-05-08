
describe("login", () => {
    it('user can login', () => {
        //login
        cy.visit('http://localhost:5000/login')
        cy.get('#email').type('wiltses@csp.edu');
        cy.get('#password').type('password4');
        cy.get(".btn-primary").click()
        

        //product + shopping cart
        cy.wait(1000)
        cy.visit('http://localhost:5000/product/9781260771381')
        cy.get('.form-select').select('3')
        cy.wait(1000)
        cy.get(".btn-block").click()
        

        //logout
        cy.wait(1000)
        cy.visit('http://localhost:5000')
        cy.get("#username").click()
        cy.wait(1000)
        cy.get('.dropdown-item').click()
    })
})