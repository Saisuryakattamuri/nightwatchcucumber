const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {
    Given(/^CB-I open Google`s search page$/, () => {
        return client
            .url('http://google.com')
            .waitForElementVisible('body', 1000)
    })

    Then(/^CB-the title is "(.*?)"$/, (text) => {
        return client.assert.title(text)
    })

    Then(/^CB-the Google search form exists$/, () => {
        return client.assert.visible('input[name="q"]')
    })

    Given(/^CB-I open Yahoo`s search page$/, () => {
        return client
            .url('https://in.yahoo.com/')
            .waitForElementVisible('body', 1000)
    })

    Then(/^CB-the Yahoo search form exists$/, () => {
        return client.assert.visible('input[name="p"]')
    })
})