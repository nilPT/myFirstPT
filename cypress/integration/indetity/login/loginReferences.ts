export enum loginFormElements {
  emailInput = "#login-email",
  passwordInput = "#login-email",
  loginButton = `button[uitestid="login-sign-in-button"]`,
  wrongCredentialsAlert = `div[uitestid="login-wrong-credentials-field"]`,
}

export enum loginFormElementsByText {
  recoverLink = "Forgot password?",
}

export enum recoverFormElements {
  emailInput = "#email",
  successAlert = ".alert-success",
}
