const { onDatePickerPage } = require("../support/page_objects/datepickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPages")
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

    it.only('should submit InLine and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Ezgi', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithNameAndPassword('test@test.com', 'password')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)

    })
    
})