Feature: Signup

    I want to test the signup

    Scenario: I can't signup without the captcha
        Given I navigate to 'https://branch-qa-challenge.holded.dev/signup' page
        When I signup like
            | name     | Drac Gallego Rocsa |
            | phone    | 666666666          |
            | email    | test@test.com      |
            | password | 123456             |
        Then A error refering to click the captcha is displayed

    Scenario: I can't signup with a weak password
        Given I navigate to 'https://branch-qa-challenge.holded.dev/signup' page
        When I signup like
            | name     | Drac Gallego Rocsa |
            | phone    | 666666666          |
            | email    | test@test.com      |
            | password | 123                |
        Then A error refering to weak password is displayed

    Scenario: I can't signup without all fields populated
        Given I navigate to 'https://branch-qa-challenge.holded.dev/signup' page
        When I just click submit
        Then A error refering that all fields must be populated shall be visible
        Then A error refering to click the captcha is displayed