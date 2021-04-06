Feature: Login

    I want to test the login

    Scenario: Login with wrong credentials
        Given I navigate to 'https://branch-qa-challenge.holXXXded.dev/login' page
        When I fulfill the login form with the credentials
            | email    | test@gmail.com |
            | password | qwerty1234     |
        When I click the login button
        Then I see a warning for wrong credentials

    Scenario: Recover password
        Given I navigate to 'https://branch-qa-challenge.holXXXded.dev/login' page
        When I click the recover password link
        When I fulfill the recovery email like 'test@gmail.com' and click send