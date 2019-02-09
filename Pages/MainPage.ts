import {Selector, t} from 'testcafe';
import LoginPage from './LoginPage';



export default class MainPage {
    private loginPageSelector: Selector;


    public constructor () {

        this.loginPageSelector = Selector('span.nav-action-inner');

    }

    async goToLoginPage() {
        await t.click(this.loginPageSelector);
        return new LoginPage();
    }

}