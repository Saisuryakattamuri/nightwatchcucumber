Feature: Yahoo Search

Scenario: Searching Yahoo

  Given CB-I open Yahoo`s search page
  Then CB-the title is "Yahoo"
  And CB-the Yahoo search form exists
