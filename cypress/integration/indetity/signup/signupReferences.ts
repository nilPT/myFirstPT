export enum signupFormElements {
  nameInput = "#signup-name",
  phoneInput = "#signup-phone",
  emailInput = "#signup-email",
  passwordInput = "#signup-password",
  submitButton = "#button-signup",
  captchaUpperDiv = ".g-recaptcha",
}

export enum signupExpectedResults {
  weakPasswordErrorContent = "Passwords must be 6 characters or more.",
  captchaErrorContent = "Please confirm you are a human",
  requiredField = "Required field",
}
