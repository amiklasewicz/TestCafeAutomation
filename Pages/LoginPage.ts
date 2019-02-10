import {Selector, t} from 'testcafe';
import MainPage from '../Pages/MainPage';
import { debug } from 'util';

export default class LoginPage {
    
    private loginSelector: Selector;
    private loginValue: string;

    private passwordSelector: Selector;
    private passwordValue: string;

    private signInButtonSelector: Selector;

    public constructor() {
        
        this.loginSelector = Selector('#ap_email');
        this.loginValue = 'netlixtestowy@gmail.com';

        this.passwordSelector = Selector('#ap_password');
        this.passwordValue = 'Test123456!'

        this.signInButtonSelector = Selector('#signInSubmit');
    }

    async loginDefaultUser() {
        await this.loginUserWithEmailAndPassword(this.loginValue, this.passwordValue);
    }
    
    async loginUserWithEmailAndPassword(email: string, password: string) {    
        await t
                .typeText(this.loginSelector, email)
                .typeText(this.passwordSelector, password)
                .click(this.signInButtonSelector);
                
    }

   

}