import { TableDefinition } from "cypress-cucumber-preprocessor";
import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

When("I signup like", (parameters: TableDefinition) => {
  const parsedParameters = parameters.rowsHash();
  cy.get("#signup-name")
    .type(parsedParameters.name)
    .get("#signup-phone")
    .type(parsedParameters.phone)
    .get("#signup-email")
    .type(parsedParameters.email)
    .get("#signup-password")
    .type(parsedParameters.password);
  cy.get(".rc-anchor-center-container").click();
});
