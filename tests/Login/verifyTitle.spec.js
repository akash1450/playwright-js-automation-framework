const { test,expect } = require("@playwright/test");
const {VerifyPage} = require ('../../pages/VerifyPage.js')

test.describe('verfyPageTitle',()=>{

    test('verifyTitle',async({page})=>{
        
   const verifyTit = new VerifyPage(page);

    await verifyTit.navigate();

    await verifyTit.getPageTitle();


    })


})