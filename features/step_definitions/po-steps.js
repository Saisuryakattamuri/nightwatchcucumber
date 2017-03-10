const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {
    Given(/^po-I open Yahoo`s search page$/, () => {
        const yahoo = client.page.yahoo()

        return yahoo
            .navigate()
            .waitForElementVisible('@body', 1000)
    })

    Then(/^po-the title is "(.*?)"$/, (text) => {
        return client.assert.title(text)
    })

    Then(/^po-the Yahoo search form exists$/, () => {
        const yahoo = client.page.yahoo()
        client.pause('1000');
        return yahoo.assert.visible('@searchBar')
    })
})