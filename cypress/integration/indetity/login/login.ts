import { TableDefinition } from "cypress-cucumber-preprocessor";
import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {
  loginFormElements,
  loginFormElementsByText,
  recoverFormElements,
} from "./loginReferences";

When(
  "I fulfill the login form with the credentials",
  (credentials: TableDefinition) => {
    cy.get(loginFormElements.emailInput).type(credentials.rowsHash().email);

    cy.get(loginFormElements.passwordInput).type(
      credentials.rowsHash().password
    );
  }
);

When("I click the login button", () => {
  cy.get(loginFormElements.loginButton).click();
});

When("I click the recover password link", () => {
  cy.contains(loginFormElementsByText.recoverLink).click();
});

When(
  "I fulfill the recovery email like {string} and click send",
  (email: string) => {
    cy.get(recoverFormElements.emailInput).type(email);
    cy.contains("Send").click();
    cy.get(recoverFormElements.successAlert).should("be.visible");
  }
);

Then("I see a warning for wrong credentials", () => {
  cy.get(loginFormElements.wrongCredentialsAlert).should("be.visible");
});
