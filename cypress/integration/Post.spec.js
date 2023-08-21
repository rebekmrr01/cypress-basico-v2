//<reference types="cypress">
describe("Teste de Api Certfy", () => {

    context('POST - core/background-check/v1/cpf-status', () => {
        it('Post', () => {
            cy.PostMethod().as('resp')
            cy.get('@resp').should((resp) => {
                expect(resp.status).to.equal(200)
            });
        });
    });
})