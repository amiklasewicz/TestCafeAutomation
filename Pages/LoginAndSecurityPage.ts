import {Selector, t} from 'testcafe';
import MainPage from './MainPage';
import LoginPage from './LoginPage'
import YourAccountPage from  './YourAccountPage'


export default class LoginAndSecurityPage{

    private editButtonSelector: Selector;
    private userNameEditFieldSelector: Selector;
    private saveUserNameChangeButtonSelector: Selector;

    private addNumberButtonSelector: Selector;
    private prefixNumberButtonSelector: Selector;
    private polishPrefixSelector: Selector;
    private numberFieldSelector: Selector;
    private saveNumberChangeButtonSelector: Selector;
   
    public constructor() {
        this.editButtonSelector = Selector('#auth-cnep-edit-name-button');
        this.userNameEditFieldSelector = Selector('#ap_customer_name'); 
        this.saveUserNameChangeButtonSelector = Selector('#cnep_1C_submit_button');

        this.addNumberButtonSelector = Selector('#auth-cnep-add-phone-button');
        this.prefixNumberButtonSelector = Selector('#a-autoid-0-announce');
        this.polishPrefixSelector = Selector('#auth-country-picker_160');
        this.numberFieldSelector = Selector('#ap_phone_number')
        this.saveNumberChangeButtonSelector = Selector('#auth-continue')
    }


    async edituserName() {
        await t
        .click(this.editButtonSelector)
        .expect(Selector('#cnep_1C_submit_button')).ok()
        .typeText(this.userNameEditFieldSelector, "test", { replace: true } )
        .click(this.userNameEditFieldSelector)
        .click(this.saveUserNameChangeButtonSelector);
    }

   

    async addPhoneNumber() {
        await t
        .click(this.addNumberButtonSelector)
        .click(this.prefixNumberButtonSelector)
        .click(this.polishPrefixSelector)
        .typeText(this.numberFieldSelector, "607414677")
        .click(this.saveNumberChangeButtonSelector);
    }

    async changePassword() {

    }


}