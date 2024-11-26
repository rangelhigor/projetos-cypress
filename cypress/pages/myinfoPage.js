class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoPage: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: "[name='firstName']",
             lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateField: "[placeholder='yyyy-dd-mm']",
            nationalityField: "[data-v-67d2aedf='']",
            dateCloseFieldButton: ".--close",
            submitButton: "[type='submit']"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
            cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
            cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        

    }

    accessMyInfoPage(){
        cy.get(this.selectorsList().myInfoPage).click()

    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
    }


}
    

export default MyInfoPage