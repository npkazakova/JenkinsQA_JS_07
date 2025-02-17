/// <reference types="cypress"/>
import dashboardCommandPanelData from "../fixtures/dashboardCommandPanel.json"

describe("dashboardCommandPanel", () => {
  it("TC_02.04.08 |  Dashboard > Command panel on the left side > Verify tasks items in the sidebar menu", () => {
    cy.get("div.task")
      .then(($els) => {
        return Cypress.$.makeArray($els).map(($els) => $els.innerText);
      })
      .should("have.length", "5")
      .and("deep.equal", dashboardCommandPanelData.allTasks);
  });
  
    it("TC_02.04.09 | Dashboard  Command panel on the left side  Verify the number of icons in the left side bar menu", () => {
      cy.get("div.task svg")
        .then(($els) => {
          return Cypress.$.makeArray($els);
        })
        .should("have.length", "5");
    });
});
