import {Selector, t} from 'testcafe';
import LoginPage from './LoginPage';



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

}