/// <reference types="cypress" />

const { find } = require("cypress/types/lodash")
const { it } = require("mocha")

describe('Our first suite', ()=> {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by Tag Name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by Class Name
        cy.get('.input-full-width')

        //by Attribute Name
        cy.get('[placeholder]')

        //by Attribute name and value
        cy.get('[placeholder="Email"]')

        //by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        
        //by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')
        
        //by two different attributes
        cy.get('[placeholder="Email"][type="email"]')

        //by Tag name, Attribute with value, ID and class name
        cy.get('input[placeholder="Email"]#inputEmail.input-full-width')
        
        //the most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]')

    })  
    it('second test', ()=> {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')
        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in')
        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain','Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()

        cy.contains('nb-card','Horizontal form')
        .find('[type="email"]')

    })
    it('then and wrap methods', ()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
        //cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain','Password')
        //cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address')
        //cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        cy.contains('nb-card', 'Using the Grid').then (firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

        cy.contains('nb-card', 'Basic form').then(secondForm => {
            const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
            
            cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain','Password' )
        })

        })


    })
    it('invoke comment',()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()  
    
        //1
        cy.get('[for="exampleInputEmail1"]').should('contain','Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then(label=>{
            expect(label.text()).to.equal('Email address')

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text=>{
            expect(text).to.equal('Email address')
        })
        })

        cy.contains('nb-card', 'Basic form')
        .find('nb-checkbox')
        .click()
        .find('.custom-checkbox')
        .invoke('attr','class')
        //.should('contain','checked')
        .then(classValue =>{
            expect(classValue).to.contain('checked')      
        
        })

    })
    it.only('assert property', ()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            cy.get('nb-datepicker-container').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jun 17, 2021')
        })



   
    })
    it('radio button', () =>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find([type="radio"]).then(radioButtons => {
            cy.wrap(radioButtons)
            .first()
            .check()

        })
    })
   

})
