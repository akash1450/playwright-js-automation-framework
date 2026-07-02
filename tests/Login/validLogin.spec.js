import{test,expect} from'@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
const loginData = require ('../../testData/loginData.json')

test.describe('Saus Demo Login',()=>{

    test('validlogin',async({page})=>{

        const login = new LoginPage(page)

        await login.GotoLoginPage()
        await login.Login(loginData.username,loginData.password)

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    })

})
