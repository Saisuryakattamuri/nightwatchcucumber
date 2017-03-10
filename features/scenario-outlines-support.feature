Feature: Scenario outlines support

Scenario Outline: Searching Google

  Given ol-I open Google`s search page
  When ol-I search for <expression>
  Then ol-the search result should contain <result>

  Examples:
    | expression | result |
    | 36/6       | 6      |
    | 500+120    | 620    |
