class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoPage: '[href="/web/index.php/pim/viewMyDetails"]'
        }

        return selectors
    }

    accessMyInfoPage(){
        cy.get(this.selectorsList().myInfoPage).click()

    }

}
    

export default MyInfoPage