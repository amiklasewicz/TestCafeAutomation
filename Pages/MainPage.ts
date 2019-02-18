import {Selector, t} from 'testcafe';
import LoginPage from './LoginPage';
import YourAccountPage from './YourAccountPage';
import LoginAndSecurityPage from './LoginAndSecurityPage';



export default class MainPage {
    
    
    private loginPageSelector: Selector;
    private loginHover: Selector;
    private yourAccountSelector: Selector;
    private additionalVerificationButton: Selector;

    


    public constructor () {
               
        this.loginPageSelector = Selector('span.nav-line-2').withText('Account & Lists');
        this.loginHover = Selector('#nav-link-accountList > span.nav-line-2 > span');
        this.yourAccountSelector = Selector('#nav-al-your-account > a:nth-child(2) > span');
        this.additionalVerificationButton = Selector('#continue');


    }

    async goToLoginPage() {
        await t.click(this.loginPageSelector);
         return new LoginPage();
    }

    async goToYourAccount() {
        await t
        .hover(Selector(this.loginHover))
        .click(Selector(this.yourAccountSelector));
        return new YourAccountPage();
    }

    async doAdditionalVerification() {
        await t
        .click(Selector(this.additionalVerificationButton));
    }


    async goToLoginAndSecuritySettings() {
        const mainPage = new MainPage();
        const loginPage = new LoginPage();
        const yourAccountPage = new YourAccountPage();
        await mainPage.goToLoginPage();
        await loginPage.loginDefaultUser();   
        await mainPage.goToYourAccount();
        await yourAccountPage.goToLoginAndSecurity();
        return new LoginAndSecurityPage(); 
    }

}