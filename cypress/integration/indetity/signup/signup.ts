import { TableDefinition } from "cypress-cucumber-preprocessor";
import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { signupExpectedResults, signupFormElements } from "./signupReferences";

When("I signup like", (parameters: TableDefinition) => {
  const parsedParameters = parameters.rowsHash();
  cy.get(signupFormElements.nameInput)
    .type(parsedParameters.name)
    .get(signupFormElements.phoneInput)
    .type(parsedParameters.phone)
    .get(signupFormElements.emailInput)
    .type(parsedParameters.email)
    .get(signupFormElements.passwordInput)
    .type(parsedParameters.password)
    .get(signupFormElements.submitButton)
    .click();
});

When("I just click submit", () => {
  cy.get(signupFormElements.submitButton).click();
});

Then("A error refering to weak password is displayed", () => {
  cy.get(signupFormElements.passwordInput)
    .next()
    .should("be.visible")
    .should("contain.text", signupExpectedResults.weakPasswordErrorContent);
});

Then("A error refering to click the captcha is displayed", () => {
  cy.get(signupFormElements.captchaUpperDiv)
    .next()
    .should("be.visible")
    .should("contain.text", signupExpectedResults.captchaErrorContent);
});

Then(
  "A error refering that all fields must be populated shall be visible",
  () => {
    cy.get("input")
      .get(".form-control")
      .each((element) => {
        cy.wrap(element.next()).should(
          "contain.text",
          signupExpectedResults.requiredField
        );
      });
  }
);
