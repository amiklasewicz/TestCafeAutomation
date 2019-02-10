import {Selector, t} from 'testcafe';
import LoginPage from './LoginPage';
import YourAccountPage from './YourAccountPage';



export default class MainPage {
    
    private loginHover: Selector;
    private loginPageSelector: Selector;
    


    public constructor () {
        
        this.loginPageSelector = Selector('span.nav-line-2').withText('Account & Lists');

    }

    async goToLoginPage() {
        await t.click(this.loginPageSelector);
         return new LoginPage();
    }

    async goToYourAccount() {
        await t
        .hover(Selector('#nav-link-accountList > span.nav-line-2 > span'))
        .click(Selector('#nav-al-your-account > a:nth-child(2) > span'));
        return new YourAccountPage();
    }

}