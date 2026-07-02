const {expect} = require('@playwright/test')

exports.VerifyRadiobtn =
class VerifyRadiobtn{

    constructor(page){
       this.page=page
       this.radiobt ="#yesRadio",
       this.verify =".text-success"
    }
    async gotopage(){
        await this.page.goto("https://demoqa.com/radio-button")
    }
    async clickonRB(){
        await this.page.locator(this.radiobt).click();
    }
    async verifyradiobtn(){
        await expect(this.page.locator(this.verify)).toContainText("Yes")
    }


}