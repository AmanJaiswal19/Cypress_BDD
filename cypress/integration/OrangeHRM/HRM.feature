Feature: Ecommerce Site: OrangeHRM
    Scenario: Login with Valid Crendetials
        Given Visit orange HRM Site
        And Fill the username
        And Fill the password
        When Click on login button
        Then Validate the Dashbord text


    # Scenario: Login with Invalid Crendetials
    #     Given Visit orange HRM Site cypress oprn

    #     And Fill the username
    #     And Fill the password
    #     When Click on login button
    #     Then Validate the Error Message


    Scenario: Login with Invalid Crendetials
        Given Visit orange HRM Site
        # And Fill the usernames
        # And Fill the passwords
        # When Click on login buttons
        And Fill the username and password
            | username | password |
            | Admin    | admin    |
        When Click on login button
        Then Validate the Error Message
