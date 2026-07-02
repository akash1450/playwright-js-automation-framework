const{expect} = require("@playwright/test")

exports.VerifyCheckbox =
class VerifyCheckbox{

    constructor(page){
        this.page=page

        this.checkboxclk=".rc-tree-checkbox"
        this.verify="div[id='result'] span:nth-child(1)"



    }

    async gotopage(){
        await this.page.goto('https://demoqa.com/checkbox')
    }

    async clickoncheckbox(){
        await this.page.locator(this.checkboxclk).click()
    }

    async verifyselected(){
        await expect(this.page.locator(this.verify)).toHaveText("You have selected :")
    }


}