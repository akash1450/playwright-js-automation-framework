import{test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
const loginInvaliddata = require('../../testData/invalidTestData.json')


test.describe('Saus Demo Login Invalid',()=>{

    test('invalid',async({page})=>{

        const login = new LoginPage(page)

       await login.GotoLoginPage()
       await login.Login(loginInvaliddata.username,loginInvaliddata.password)

       await page.waitForTimeout(2000)
        
       await login.Errormsg()

    })


})
