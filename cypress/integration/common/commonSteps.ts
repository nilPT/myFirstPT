/// <reference types="cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to {string} page", (url: string) => {
  cy.visit(url);
});
