Feature:E-commerce site end-to-end validation
    Scenario: search and book the vegitable
        Given visit the E-commerce site
        And search product starts from ca
        And Add to cart cashews
        When place order and select country
        Then validate the Thank you massage