# Run the project

```
npm run prepare-project
npm run run-all-tests
```

# Test cases

Based on the criteria of:

- Business Impact
- Viability to automate
- Likelihood of not beeing altered
  I would suggest the following test cases, sorted by descending priority:

## For the Login

1. Correct login: The user submites a valid log-in credentials, and the platform grants him access.
2. Incorrect login: The user submites invalid credentials, and he sees a error message.
3. Incorrect login, retrieve password: The user submites invalid credentials, and he sees a error message. He has access to the "retrieve password" link.
4. No credentials: The user forgot to populate the email and/or the password. When he tries to submit the form, a error on the missing field/s is displayed.

## For the Signup

1. Correct Signup: The user submites a valid signup form, then he sees a success message and his profile is registered in the database.
2. Blank Signup: The user forgots to fulfill one or more fields in the form, then a error message is displayed in the blank fields.
3. Weak password: The user completes the form, but introduces a password with less tahn 6 characters. Then, a error message is displayed asking to make the password larger.
4. Click Captcha: The user fulfills de form, but doesn't click the captch. Then, a error is displayed asking the user to click it. 5. Bad formatted inputs: When the user populates de form with invalid data (a name or phone too short or bad formatted email), a error shall be displayed asking him to correct the affectged fields.

# Approach

Once the application requeriments (functional or non-functional) are known by the QA/Automation team, those shall be evaluated to see which ones can be automated and which can not.
Once the backlog is populated with those tests that can be automated, each team member will have a task assigned to work on. At the beggining,the automated test plan can start by those tests that could have a heavier impact on the business, like the register and login form.
