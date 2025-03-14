/// <reference types="cypress"/>

describe("Buscar dispositivo", () => {
   it("Buscar dispositivo especifico", () => {
      cy.request({
         method: 'GET',
         url: 'https://api.restful-api.dev/objects/7'
      }).then((response) => {
         expect(response.status).to.equal(200);
         expect(response.body.id).to.equal("7");
      });
   });

   it("Buscar dispositivo inexitente", () => {
      cy.request({
         method: 'GET',
         url: 'https://api.restful-api.dev/objects/jgggkgkjjkgjgjggjgghghg',
         failOnstatusCode: false
      }).then((response) => {
         expect(response.status).to.equal(404);
         expect(response.body.error).to.equal("Object with id=jgggkgkjjkgjgjggjgghghg was not found.");
      });
   });
});