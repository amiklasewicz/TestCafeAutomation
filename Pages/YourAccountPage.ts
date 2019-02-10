import {Selector, t} from 'testcafe';




export default class YourAccountPage {
    
    private yourOrdersSelector: Selector;
    private loginAndSecuritySelector: Selector;

    
    constructor() {

        this.yourOrdersSelector = Selector('#a-page > div.a-container > div > div:nth-child(2) > div:nth-child(1) > a > div');
        this.loginAndSecuritySelector = Selector('#a-page > div.a-container > div > div:nth-child(1) > div:nth-child(2) > a > div > div > div');

    }

    async goToYourOrders() {
        await t.click(this.yourOrdersSelector);
    }

    async goToLoginAndSecurity() {
        await t.click(this.loginAndSecuritySelector);
    }
    
}