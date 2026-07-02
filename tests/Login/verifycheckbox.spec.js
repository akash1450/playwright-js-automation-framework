import { test,expect } from "@playwright/test";
import { VerifyCheckbox } from "../../pages/VerifyCheckbox";

test.describe('verify checkbox',()=>{

    test('VerifyCheckbox',async({page})=>{

        const verfybx = new VerifyCheckbox(page)
        await verfybx.gotopage()
        await verfybx.clickoncheckbox()
        await verfybx.verifyselected()

        

    })

})

    
