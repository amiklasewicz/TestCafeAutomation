import {Selector} from 'testcafe';
import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import { amazonURL } from '../Helpers/PageUrlHelper';

fixture('login user')
.page(amazonURL());

test('login to amazon', async () =>{
    const mainPage = new MainPage();
    const loginPage = await mainPage.goToLoginPage();
    await loginPage.loginDefaultUser();
})