import { TableDefinition } from "cypress-cucumber-preprocessor";
import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

When(
  "I fulfill the login form with the credentials",
  (credentials: TableDefinition) => {
    cy.get("#login-email")
      .type(credentials.rowsHash().email)
      .end()
      .get("#login-password")
      .type(credentials.rowsHash().password);
  }
);

When("I click the login button", () => {
  cy.get('button[uitestid="login-sign-in-button"]').click();
});

When("I click the recover password link", () => {
  cy.contains("Forgot password?").click();
});

When("I fulfill the recovery email like {string}", (email: string) => {
  cy.get("#email").type(email);
  cy.contains("Send").click();
  cy.get(".alert-success").should("be.visible");
});

Then("I see a warning for wrong credentials", () => {
  cy.get(`div[uitestid="login-wrong-credentials-field"]`).should("be.visible");
});
