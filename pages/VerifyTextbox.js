const{expect}=require ('@playwright/test')
const { verify } = require('node:crypto')
const{verifytextbox} = require('../testData/verifytextbox.json')

exports.VerifyTextbox =
class VerifyTextbox{

constructor(page){
    this.page=page
    this.fullname="//input[@id='userName']"
    this.email="//input[@id='userEmail']"
    this.currentaddress="//textarea[@id='currentAddress']"
    this.permanentaddress="//textarea[@id='permanentAddress']"
    this.submit="//button[@id='submit']"
}

async gotopage(){
    await this.page.goto("https://demoqa.com/text-box?utm_source=chatgpt.com")
}

async filldatasubmit(fullname,email,currentaddress,permanentaddress){
    await this.page.locator(this.fullname).fill(fullname)
    await this.page.locator(this.email).fill(email)
    await this.page.locator(this.currentaddress).fill(currentaddress)
    await this.page.locator(this.permanentaddress).fill(permanentaddress)
    await this.page.locator(this.submit).click()
}

async verifydata(){
    await expect(this.page.locator('[id="permanentAddress"][class="mb-1"]')).toContainText('solapur')
}







}