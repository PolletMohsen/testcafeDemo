import { Selector ,t} from 'testcafe'; 

class landingpage{
    emailTxt: Selector = Selector('#email-input');
    connectBtn: Selector = Selector('#connect');

    async getMagicLink()
    {
       await t.typeText(this.emailTxt,'pollet.mohsen@crowdanalyzer.com');
       await t.click(this.connectBtn);
    }
}

export const landingPage = new landingpage();