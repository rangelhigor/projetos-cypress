import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myinfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

    const selectorsList = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input",
      dateField: "[placeholder='yyyy-dd-mm']",
      nationalityField: "[data-v-67d2aedf='']",
      dateCloseFieldButton: ".--close",
      submitButton: "[type='submit']"


    }


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkdashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.accessMyInfoPage()
    
     
     cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
     cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
     cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
     cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
     cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicenseTest')
     cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10') 
     cy.get(selectorsList.dateCloseFieldButton).click()
     cy.get(selectorsList.submitButton).eq(0).click()
     cy.get('body').should('contain', 'Successfully Updated')
    

  })  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)  
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)  
    
  })
})