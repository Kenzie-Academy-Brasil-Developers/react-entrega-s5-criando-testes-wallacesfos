
context("Page initial", () => {
    it("The page should display the address", () => {
        cy.visit('http://localhost:3000')
        cy.viewport(1440, 900)

        cy.get("input[name=cep]").type(78650000)
        cy.get("button[name=search]").click();

        cy.contains("Logradouro")
    })

    it("It has a text written 'Bairro'", () => {
        cy.visit('http://localhost:3000')
        cy.viewport(1440, 900)

        cy.get("input[name=cep]").type(21770100)
        cy.get("button[name=search]").click()

        cy.contains("Bairro")
    })

    it("It has a text written 'Cidade'", () => {
        cy.visit('http://localhost:3000')
        cy.viewport(1440, 900)

        cy.get("input[name=cep]").type(21770100)
        cy.get("button[name=search]").click()

        cy.contains("Cidade")
    })
})