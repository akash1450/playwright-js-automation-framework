const{expect} = require('@playwright/test')

exports.VerifyPage =
class VerifyPage{

    constructor (page){
         this.page =page
    }

    async navigate(){
        await this.page.goto('https://demoqa.com/')
    }

    async getPageTitle(){
        await expect(this.page).toHaveTitle('demosite')

    }

}