const { navigateTo } = require("../support/page_objects/navigationPage")

describe ('Test with Page Objects', () => {

    beforeEach('open apllication', () => {
        cy.visit('/')
    })

    it('verify navigations across the pages', () => {

        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })
    
})