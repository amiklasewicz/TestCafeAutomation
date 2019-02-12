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
    const loginAndSecurity = await mainPage.goToLoginAndSecuritySettings();  
    await loginAndSecurity.edituserName();   
})


test('Add phone number', async () =>{
    const mainPage = new MainPage();
    const loginAndSecurity = await mainPage.goToLoginAndSecuritySettings();   
    await loginAndSecurity.addPhoneNumber();
})
