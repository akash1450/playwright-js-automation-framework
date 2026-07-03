import{test,expect}from "@playwright/test"
import { VerifyCheckbox } from "../../pages/VerifyCheckbox"
import { VerifyTextbox } from "../../pages/VerifyTextbox"
const verifytextbox =require ('../../testData/verifytextbox.json')

test.describe('verify text box',()=>{

    test('fill and submit',async({page})=>{

        const verify = new VerifyTextbox(page)

        await verify.gotopage()

        await verify.filldatasubmit(verifytextbox.fullname,verifytextbox.email,verifytextbox.currentaddress,verifytextbox.permanentaddress)

        await page.waitForTimeout(4000)

        await verify.verifydata()
    })

})