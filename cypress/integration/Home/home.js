const { expect } = require("chai")

Given('User already at home music youtube', () => {
    cy.visit('https://music.youtube.com/')
})

When('User visit Music Youtube', () => {
    cy.visit('https://music.youtube.com/')
})

When('User click thumbnail music', () => {
    cy.get('#items > .style-scope:nth-child(1) > .yt-simple-endpoint > .thumbnail-overlay > #content').should('be.visible').click()
})

When('User click textlink below thumbnail', () => {
    cy.get('#items > .style-scope:nth-child(1) > .details > .title-group > .title').should('be.visible').click()
})

When('User click icon play at one of music thumbnail', () => {
    cy.get('#items > .style-scope:nth-child(1) > .yt-simple-endpoint > .thumbnail-overlay > #content > #play-button .icon').should('be.visible').click()
})

Then('User can see youtube music logo', () => {
    expect(cy.get('#left-content > a > picture:nth-child(1) > img').should('have.attr','src','//music.youtube.com/img/on_platform_logo_dark.svg'))
})

Then('User will redirected to details music playlist', () => {
    expect(cy.url().should('contain','https://music.youtube.com/playlist?list'))
})

Then('User will redirected to details music watch', () => {
    expect(cy.url().should('contain','https://music.youtube.com/watch'))
})

And('User can see navbar include Home button, Explore button, Library button, Search button', () => {
    expect(cy.get('.style-scope > .center-content > .style-scope > .style-scope:nth-child(1) > .tab-title').contains('Beranda').should('be.visible'))
    expect(cy.get('.style-scope > .center-content > .style-scope > .style-scope:nth-child(2) > .tab-title').contains('Eksplorasi').should('be.visible'))
    expect(cy.get('.style-scope > .center-content > .style-scope > .style-scope:nth-child(3) > .tab-title').contains('Koleksi').should('be.visible'))
    expect(cy.get('.center-content > .style-scope > .search-container > .search-box > .search-icon').should('be.visible'))
})

And('Navbar posisition at Home', () => {
    if(cy.get('.style-scope > .center-content > .style-scope > .style-scope:nth-child(1)')) {
        expect(cy.should('have.attr','aria-selected','true'))
    } else if(cy.get('.style-scope > .center-content > .style-scope > .style-scope:nth-child(2)')) {
        expect(cy.should('have.attr','aria-selected','false'))
    } else if(cy.get('.style-scope > .center-content > .style-scope > .style-scope:nth-child(3)')) {
        expect(cy.should('have.attr','aria-selected','false'))
    }
})

And('User can see cast button', () => {
    expect(cy.get('#right-content > .cast-button > .cast-button > .chromecast-icon > .chromecast').should('be.visible'))
})

And('User can see three dots button', () => {
    expect(cy.get('#layout > .style-scope > #right-content > #menu-button > #icon').should('be.visible'))
})

And('User can see SIGN IN button', () => {
    expect(cy.get('ytmusic-app > #layout > .style-scope > #right-content > .sign-in-link').should('be.visible'))
})

And('User can see a several carousel music playlist selection by youtube', () => {
    expect(cy.get('#items > .style-scope.ytmusic-carousel').should('be.visible'))
})

And('User can see next item button carousel music playlist', () => {
    expect(cy.get('#next-items-button').should('be.visible'))
})

And('User can see cover music playlist', () => {
    expect(cy.get('.content-container > #thumbnail > .style-scope > .style-scope > #img').should('be.visible'))
})

And('User can see title playlist', () => {
    expect(cy.get('.style-scope > .content-container > .metadata > .style-scope > .title').should('be.visible'))
})

And('User can see subtitle playlist', () => {
    expect(cy.get('.content-container > .metadata > .subtitle-container > .subtitle > .style-scope:nth-child(3)').should('be.visible'))
})

And('User can see description playlist', () => {
    expect(cy.get('#header > .style-scope > .content-container > .metadata > #description').should('be.visible'))
})

And('User can see SHUFFLE button', () => {
    expect(cy.get('#top-level-buttons > .watch-button > .yt-simple-endpoint > #button > #text').contains('Acak').should('be.visible'))
})

And('User can see ADD TO LIBRARY button', () => {
    expect(cy.get('#top-level-buttons > .style-scope > .ytmusic-toggle-button-renderer > #button > #text').contains('Tambahkan ke koleksi').should('be.visible'))
})

And('User can see three dots button', () => {
    expect(cy.get('.style-scope > .content-container > .detail-page-menu > #button > #icon').should('be.visible'))
})

And('User can see music playlist', () => {
    expect(cy.get('#contents > .ytmusic-playlist-shelf-renderer').should('be.visible'))
})

And('Music should be played automatically', () => {
    expect(cy.get('.style-scope > #left-controls > .left-controls-buttons > #play-pause-button > #icon').should('be.visible'))
})

And('User can see cover music currenlty playing', () => {
    expect(cy.get('#player > div.song-media-controls.style-scope.ytmusic-player').should('be.visible'))
})

And('User can see a several tab UP NEXT, LYRICS, RELATED', () => {
    expect(cy.get('#tabsContent > tp-yt-paper-tab.tab-header.style-scope.ytmusic-player-page.iron-selected').contains('Berikutnya').should('be.visible'))
    expect(cy.get('#tabsContent > tp-yt-paper-tab:nth-child(3)').contains('Lirik').should('be.visible'))
    expect(cy.get('#tabsContent > tp-yt-paper-tab:nth-child(4)').contains('Terkait').should('be.visible'))
})

And('The tab should be at UP NEXT section', () => {
    if(cy.get('#tabsContent > tp-yt-paper-tab.tab-header.style-scope.ytmusic-player-page.iron-selected').contains('Berikutnya')) {
        expect(cy.should('have.attr','aria-selected','true'))
    } else if(cy.get('#tabsContent > tp-yt-paper-tab:nth-child(3)').contains('Lirik')) {
        expect(cy.should('have.attr','aria-selected','false'))
    } else if(cy.get('#tabsContent > tp-yt-paper-tab:nth-child(4)').contains('Terkait')) {
        expect(cy.should('have.attr','aria-selected','false'))
    }
})

And('User can see the next music playlist', () => {
    expect(cy.get('#tab-renderer > .scroller').should('be.visible'))
})

And('User see player bar backgroud', () => {
    expect(cy.get('#player-bar-background > .ytmusic-app-layout').should('be.visible'))
})

And('User can scroll down the next music playlist', () => {
    expect(cy.get('#tab-renderer > .scroller').scrollTo('bottom'))
})

And('User can scroll down page', () => {
    expect(cy.scrollTo('bottom'))
})