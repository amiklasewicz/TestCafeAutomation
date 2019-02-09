import {Selector} from 'testcafe';
import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import { amazonURL } from '../Helpers/PageUrlHelper';
require('dotenv').config();

fixture('login user')
.page('https://www.amazon.com/');

test('login to amazon', async () =>{
    const mainPage = new MainPage();
    const loginPage = await mainPage.goToLoginPage();
    await loginPage.loginDefaultUser();
})