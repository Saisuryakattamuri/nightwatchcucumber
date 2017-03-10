Feature: Google Search

Scenario: Searching Google

  Given CB-I open Google`s search page
  Then CB-the title is "Google"
  And CB-the Google search form exists

Scenario: Searching Google again

  Given CB-I open Google`s search page
  Then CB-the title is "Google"
  And CB-the Google search form exists
