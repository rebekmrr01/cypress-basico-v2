//<reference types="cypress">
describe("Teste de Api Certfy", () => {

    context('PUT - api/certification/v1/change-status', () => {
        it('Consulta com valores válidos', () => {
            cy.PutMethod().as('resp')
            cy.get('@resp').should((resp) => {
                expect(resp.status).to.equal(200)
                expect(resp.body).to.equal(true)
            });
        });

        it('Consulta contendo valor certificationRequestId invalido', () => {
            cy.PuutMethod().as('resp')
            cy.get('@resp').should((resp) => {
                expect(resp.status).to.equal(400)
                expect(resp.body.success).to.equal(false)

            });
        });
    });
})