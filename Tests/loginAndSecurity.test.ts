import {Selector,t} from 'testcafe';
import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import LoginAndSecurityPage from '../Pages/LoginAndSecurityPage';
import { amazonURL } from '../Helpers/PageUrlHelper';
import YourAccountPage from '../Pages/YourAccountPage';
import { debug } from 'util';


fixture('Login and security settings')
.page('https://www.amazon.com/');

test('Edit name of user', async () =>{
    const mainPage = new MainPage();
    const loginPage = new LoginPage();
    const yourAccountPage = new YourAccountPage();
    const loginAndSecurity = new LoginAndSecurityPage();
    await mainPage.goToLoginPage();
    await loginPage.loginDefaultUser();   
    await mainPage.goToYourAccount();
    await yourAccountPage.goToLoginAndSecurity();
    await loginAndSecurity.edituserName();
    
})
