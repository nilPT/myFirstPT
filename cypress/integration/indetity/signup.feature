Feature: Signup

    I want to test the signup

    Scenario: I signup
        Given I navigate to 'https://branch-qa-challenge.holded.dev/signup' page
        When I signup like
            | name       | Drac Gallego Rocsa |
            | phone      | 666666666          |
            | email      | test@test.com      |
            | password   | 123456             |
            | newslatter | true               |

    Scenario: I signup with a weak password
        Given I navigate to 'https://branch-qa-challenge.holded.dev/signup' page
        When I signup like
            | name       | Drac Gallego Rocsa |
            | phone      | 666666666          |
            | email      | test@test.com      |
            | password   | 123                |
            | newslatter | true               |