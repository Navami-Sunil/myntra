Feature: Myntra Shopping - Search for Western Tops and Proceed to Payment

  Scenario: User searches for Western Tops, selects a top, and moves to the payment page
    Given I am on the Myntra homepage
    When I search for western tops
    When I add the selected top to the cart
    Then I proceed to the payment page
