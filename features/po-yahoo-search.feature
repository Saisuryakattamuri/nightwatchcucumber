Feature: Yahoo Search

Scenario: Searching Yahoo

  Given po-I open Yahoo`s search page
  Then po-the title is "Yahoo"
  And po-the Yahoo search form exists
