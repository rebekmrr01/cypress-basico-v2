//<reference types="cypress">
describe("Teste de Api Certfy", () => {

    context('GET - api/certification/v1/documents/${customer}/crId/${crid}', () => {
        it('Consulta com valores válidos', () => {
            const customer = '35716ef2-7a58-4468-8dd5-6d0b6e617fb5'
            const crid = '8105cce7-706e-490e-9376-03b95df0aa2f'
            cy.GetMethod(customer, crid).as('resp')
            cy.get('@resp').should((resp) => {
                expect(resp.status).to.equal(200)
            });
        });

        it('Consulta contendo o valor CustomerId invalido', () => {
            const customer = '35716ef2-7a58-4468-8dd5-6d0b6e6'
            const aa = '8105cce7-706e-490e-9376-03b95df0aa2f'
            cy.GetMethod(customer, aa).as('resp')
            cy.get('@resp').should((resp) => {
                expect(resp.status).to.equal(400)
            });
        });

        it('Consulta contendo o valor crid inválido', () => {
            const customer = '35716ef2-7a58-4468-8dd5-6d0b6e617fb5'
            const crid = '8105cce7-706e-490e-9376-03b95df0'
            cy.GetMethod(customer, crid).as('resp')
            cy.get('@resp').should((resp) => {
                expect(resp.status).to.equal(400)
            });
        });

        //customerId Vazio
        it('Consulta contendo o valor customerId vazio', () => {
            const customer = ''
            const crid = '8105cce7-706e-490e-9376-03b95df0'
            cy.GetMethod(customer, crid).as('resp')
            cy.get('@resp').should((resp) => {
                expect(resp.status).to.equal(404)
            });
        });

        //Crid vazio
        it('Consulta contendo o valor Crid vazio', () => {
            const customer = '35716ef2-7a58-4468-8dd5-6d0b6e617fb5'
            const crid = ''
            cy.GetMethod(customer, crid).as('resp')
            cy.get('@resp').should((resp) => {
                expect(resp.status).to.equal(404)
            });
        });
    });
})