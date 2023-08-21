export function posta(){
        cy.request({
            method: 'POST',
            url: 'https://api-hmlg.certfy.tech/certification/api/certification/v1/change-status',
            body:{
                "certificationRequestId": "35716ef2-7a58-4468-8dd5-6d0b6e617fb5",
                "status": "EmAnalise",
                "reason": "string"
            }
        })
}











//export function postFaceMatch(messageId, lastmsgId, atendimento) {
    //const messageId = 'IM' + id
    //return cy.fixture('token').then((token) => {
      //      cy.api({
        //        method: 'POST',
          //      url: '',
                
            //    body: {
                    //"image": face
              //  }
            //})
        //})
    //})
//}
