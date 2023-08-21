Cypress.Commands.add('GetMethod', (customer, crid) => {
    cy.request({
        method: 'GET',
        url: `https://api-hmlg.certfy.tech/certification/api/certification/v1/documents/${customer}/crId/${crid}`,
        //url: 'https://api-hmlg.certfy.tech/certification/identification/singular-id/v1/identifications/${cpf}',
        //url: `https://api-hmlg.certfy.tech/certification/certificationrequest/certification-request/v1/certifications/${customer}/cpf/${cpf}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('PostMethod', () => {
    cy.request({
        method: 'POST',
        url: `https://api-hmlg.certfy.tech/certification/core/background-check/v1/cpf-status`,
        body: {
            customerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            singularId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            certificationRequestId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            cpf: "91726928470"
        }
    });
});

    Cypress.Commands.add('PutMethod', () => {
        cy.request({
            method: 'PUT',
            url: `https://api-hmlg.certfy.tech/certification/api/certification/v1/change-status`,
            body: {
                certificationRequestId: "35716ef2-7a58-4468-8dd5-6d0b6e617fb5",
                status: "EmAnalise",
                reason: "string"
            }
        });


        Cypress.Commands.add('PuutMethod', () => {
            cy.request({
                method: 'PUT',
                url: `https://api-hmlg.certfy.tech/certification/api/certification/v1/change-status`,
                failOnStatusCode: false,
                body: {
                    certificationRequestId: "35716ef2-7a58-4468-8dd5-6d0b6e617fb",
                    status: "EmAnalise",
                    reason: "string"
                }
            });
        });
    })




//Cypress.Commands.add('GetMethod', (cpf) => {
  //  cy.request({
    //    method: 'GET',
      //  url: 'https://api-hmlg.certfy.tech/certification/identification/singular-id/v1/identifications/${cpf}',
        //failOnStatusCode: false
    //})

//})

//Cypress.Commands.add('GetMethod', (customer,cpf) => {
//Cypress.Commands.add('GetMethod', (cpf) => {
//Cypress.Commands.add('GetMethod', (customer,aa) => {



//Cypress.Commands.add('GetMethod', (customer,cpf) => {
//cy.request({
   // method: 'GET',
    //url: `https://api-hmlg.certfy.tech/certification/certificationrequest/certification-request/v1/certifications/${customer}/cpf/${cpf}`,
   // failOnStatusCode: false
//})
//})