Feature: Youtube Music Home Page

    Scenario: Show playlist selection
    When User visit Music Youtube
    Then User can see youtube music logo
    And User can see navbar include Home button, Explore button, Library button, Search button
    And Navbar posisition at Home
    And User can see cast button
    And User can see three dots button
    And User can see SIGN IN button
    And User can see a several carousel music playlist selection by youtube
    And User can see next item button carousel music playlist
    And User can scroll down page

    Scenario: Details playlist by click thumbnail music
    Given User already at home music youtube
    When User click thumbnail music
    Then User will redirected to details music playlist
    And User can see youtube music logo
    And User can see navbar include Home button, Explore button, Library button, Search button
    And User can see cast button
    And User can see three dots button
    And User can see SIGN IN button
    And User can see cover music playlist
    And User can see title playlist
    And User can see subtitle playlist
    And User can see description playlist
    And User can see SHUFFLE button
    And User can see ADD TO LIBRARY button
    And User can see three dots button
    And User can see music playlist
    And User can scroll down page

    Scenario: Details playlist by click textlink below thumbnail
    Given User already at home music youtube
    When User click textlink below thumbnail
    Then User will redirected to details music playlist
    And User can see youtube music logo
    And User can see navbar include Home button, Explore button, Library button, Search button
    And User can see cast button
    And User can see three dots button
    And User can see SIGN IN button
    And User can see cover music playlist
    And User can see title playlist
    And User can see subtitle playlist
    And User can see description playlist
    And User can see SHUFFLE button
    And User can see ADD TO LIBRARY button
    And User can see three dots button
    And User can see music playlist
    And User can scroll down page

    @play
    Scenario: Play Music
    Given User already at home music youtube
    When User click icon play at one of music thumbnail
    Then User will redirected to details music watch
    And User can see youtube music logo
    And User can see navbar include Home button, Explore button, Library button, Search button
    And User can see cast button
    And User can see three dots button
    And User can see SIGN IN button
    And Music should be played automatically
    And User can see cover music currenlty playing
    And User can see a several tab UP NEXT, LYRICS, RELATED
    And The tab should be at UP NEXT section
    And User can see the next music playlist
    And User see player bar backgroud
    And User can scroll down the next music playlist