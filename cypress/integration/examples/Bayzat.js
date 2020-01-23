describe('TestSuite', function() {
 
    it('Verifythehomepage', function() {
     cy.visit('http://www.bayzat.com/')
     cy.title().should('eq', 'Compare, Buy Health Insurance Dubai & HR Software for SMEs, UAE - Bayzat')

    })
    it('Verify the Login Page', function() {
       cy.contains('Login').click()
       cy.title().should('eq','Bayzat')
       cy.get('#ember11-field').type('test+testcompany@bayzat.com')
       cy.get('#ember12-field').type('123456789')
       cy.get('#ember15').click()
       
    })
    it('Verify the Dashboard and View Team Page', function() {
        
        cy.url().should('eq' , 'https://www.bayzat.com/enterprise/dashboard/index')
        cy.get('#ember135 > .main-menu__title').click()//View Team Page
        cy.get('.content-header__title').contains('View Team') 
        cy.wait(1000)
        cy.xpath("//span[contains(text(),'Add Employees')]").click()
        cy.url().should('eq','https://www.bayzat.com/enterprise/dashboard/import-users') //Check the Add Employee page
    
        cy.xpath('//a[text()="Add Employee"]')//Click On Add employee Button
        .click()
        cy.url().should('eq','https://www.bayzat.com/enterprise/dashboard/employees/create')

        cy.get('#ember411-field').type('Muhammad')//Enter First Name
        cy.get('#ember413-field').type('bayzat')//Enter Last Name
        cy.get('#ember438-field').type('Muhammad@gmail.com')//Enter Email ID 
        cy.get('button')//Click on the Create button
        .contains('Create')
        .click()
        cy.wait(1000)
        cy.get('#ember135 > .main-menu__title').click() // View Team Page
        cy.get('.content-header__title').contains('View Team') 
        cy.wait(1000)
        
        cy.xpath('//input[@placeholder="Search by employee..."]').type('Kabra')
        cy.wait(3000)
        cy.xpath('(//i)[33]').click()
        cy.xpath('(//button/i)[3]')
          .click()
          cy.get('button')//Click on the Create button
          .contains('Confirm')
          .click()
        cy.wait(1000)
        cy.get('td').contains('No employees yet.')
        cy.xpath('//span[contains(text(),"Logout")]').click()
        cy.url().should('eq' , 'https://www.bayzat.com/enterprise/dashboard/login')
     })

     


    
 
})