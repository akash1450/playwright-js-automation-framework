import{test, expect} from "@playwright/test"
import { verify } from "node:crypto"
import { VerifyRadiobtn } from "../pages/VerifyRadiobtn"

test.describe('verifyradiobtn',()=>{

    test('verifyrdb',async({page})=>{

        const Verify = new VerifyRadiobtn(page)

        await Verify.gotopage()
        await Verify.clickonRB()
        await page.waitForTimeout(2000)
        await Verify.verifyradiobtn()
       


    })

})

