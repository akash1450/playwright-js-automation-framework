const{expect} = require ('@playwright/test')
const { BASE_URL } = require('../utiles/constants')

exports.LoginPage =
class LoginPage{

    constructor(page){

        this.page=page
        this.username= '#user-name'
        this.password= '#password'
        this.loginbtn= '#login-button'
        this.Error="h3[data-test='error']"
    }

      async GotoLoginPage(){
            await this.page.goto(BASE_URL)
        }

      async Login(username,password){
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginbtn).click()
      } 

      async Errormsg(){
        await expect(this.page.locator(this.Error)).toContainText('Epic sadface: Username and password do not match any user in this service')
      }


}