import {Selector, t} from 'testcafe';

export default class LoginAndSecurityPage{

    private editButtonSelector: Selector;
    private userNameEditFieldSelector: Selector;
    private saveUserNameChangeButtonSelector: Selector;
   
    public constructor() {
        this.editButtonSelector = Selector('#auth-cnep-edit-name-button');
        this.userNameEditFieldSelector = Selector('#ap_customer_name'); 
        this.saveUserNameChangeButtonSelector = Selector('#cnep_1C_submit_button');
    }


    async edituserName() {
        await t
        .click(this.editButtonSelector)
        .expect(Selector('#cnep_1C_submit_button')).ok()
        .typeText(this.userNameEditFieldSelector, "test", { replace: true } )
        .click(this.userNameEditFieldSelector)
        .click(this.saveUserNameChangeButtonSelector);
    }


}